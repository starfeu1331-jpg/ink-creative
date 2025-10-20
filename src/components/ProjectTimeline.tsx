'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Video, Package, Rocket, Gem, Lightbulb } from 'lucide-react';
import { trackTimelineInteraction, trackProjectView } from './Analytics';

// Fonction pour rendre les icônes de projet
const renderProjectIcon = (iconType: string, className: string = "w-4 h-4") => {
  switch (iconType) {
    case 'video':
      return <Video className={className} />;
    case 'package':
      return <Package className={className} />;
    case 'rocket':
      return <Rocket className={className} />;
    case 'gem':
      return <Gem className={className} />;
    case 'lightbulb':
      return <Lightbulb className={className} />;
    default:
      return <div className="text-sm">{iconType}</div>;
  }
};

import { 
  DndContext, 
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragStartEvent,
  useDroppable,
  DragOverlay,
} from '@dnd-kit/core';
import {
  useSortable,
  SortableContext,
  rectSortingStrategy
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface Project {
  id: string;
  title: string;
  category: string;
  year: number;
  color: string;
  description: string;
  tags: string[];
  image: string;
  startTime: number; // En secondes
  duration: number;  // En secondes
  track: number;     // Numéro de piste (0, 1, 2, etc.)
}

// Composant pour afficher un projet dans la timeline
const ProjectBlock = ({ 
  project, 
  onClick, 
  pixelsPerSecond = 8,
  isDragging = false
}: { 
  project: Project; 
  onClick: (project: Project) => void;
  pixelsPerSecond?: number;
  isDragging?: boolean;
}) => {
  const width = project.duration * pixelsPerSecond;
  const left = project.startTime * pixelsPerSecond;
  
  return (
    <motion.div
      className={`absolute h-14 rounded-lg cursor-pointer
                 border border-white/20 backdrop-blur-xl shadow-lg
                 flex items-center px-3 text-white text-xs font-medium
                 group overflow-hidden ${isDragging ? 'opacity-50' : ''}`}
      style={{
        background: `linear-gradient(135deg, ${project.color}, ${project.color}88)`,
        width: `${width}px`,
        left: `${left}px`,
        top: '50%',
        transform: 'translateY(-50%)', // Centré parfaitement dans la piste
        minWidth: '80px'
      }}
      onClick={() => !isDragging && onClick(project)}
      whileHover={!isDragging ? { 
        scale: 1.02, 
        transform: 'translateY(-50%) translateY(-2px)', // Combine le centrage et le hover
        zIndex: 50 
      } : {}}
      transition={{ duration: 0.2 }}
    >
      {/* Effet de brillance au hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent 
                      translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
      
      {/* Contenu du projet */}
      <div className="relative z-10 flex items-center gap-2 w-full">
        <div className="flex-shrink-0">{renderProjectIcon(project.image, "w-4 h-4 text-white")}</div>
        <div className="flex-1 min-w-0">
          <div className="truncate font-medium text-xs">{project.title}</div>
          <div className="text-[10px] text-white/60">{project.category}</div>
        </div>
      </div>
      
      {/* Durée */}
      <div className="absolute bottom-1 right-1 text-[9px] text-white/50 font-mono">
        {project.duration}s
      </div>
      
      {/* Poignées de redimensionnement */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-transparent hover:bg-white/30 cursor-ew-resize transition-colors" />
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-transparent hover:bg-white/30 cursor-ew-resize transition-colors" />
    </motion.div>
  );
};

// Version spéciale du ProjectBlock pour le DragOverlay (sans position absolute)
const DraggedProjectBlock = ({ 
  project, 
  pixelsPerSecond = 8 
}: { 
  project: Project; 
  pixelsPerSecond?: number;
}) => {
  const width = project.duration * pixelsPerSecond;
  
  return (
    <motion.div
      className="h-14 rounded-lg cursor-grabbing
                 border border-white/20 backdrop-blur-xl shadow-xl
                 flex items-center px-3 text-white text-xs font-medium
                 group overflow-hidden relative"
      style={{
        background: `linear-gradient(135deg, ${project.color}, ${project.color}88)`,
        width: `${width}px`,
        minWidth: '80px',
        transform: 'rotate(3deg) scale(1.05)',
        filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))'
      }}
      initial={{ scale: 1.05, rotate: 3 }}
      animate={{ scale: 1.05, rotate: 3 }}
    >
      {/* Effet de brillance */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      {/* Contenu du projet */}
      <div className="relative z-10 flex items-center gap-2 w-full">
        <div className="flex-shrink-0">{renderProjectIcon(project.image, "w-4 h-4 text-white")}</div>
        <div className="flex-1 min-w-0">
          <div className="truncate font-medium text-xs">{project.title}</div>
          <div className="text-[10px] text-white/60">{project.category}</div>
        </div>
      </div>
      
      {/* Durée */}
      <div className="absolute bottom-1 right-1 text-[9px] text-white/50 font-mono">
        {project.duration}s
      </div>
    </motion.div>
  );
};

// Composant draggable pour les projets
const SortableProject = ({ 
  project, 
  onClick,
  pixelsPerSecond = 8 
}: { 
  project: Project; 
  onClick: (project: Project) => void;
  pixelsPerSecond?: number;
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ 
    id: project.id,
    data: { 
      type: 'project',
      project 
    }
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 1000 : 1,
    opacity: isDragging ? 0.7 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >
      <ProjectBlock 
        project={project} 
        onClick={onClick}
        pixelsPerSecond={pixelsPerSecond}
        isDragging={isDragging}
      />
    </div>
  );
};

// Zone de drop pour chaque piste
const TrackDropZone = ({ 
  trackIndex, 
  children 
}: { 
  trackIndex: number;
  children: React.ReactNode;
}) => {
  const { isOver, setNodeRef } = useDroppable({
    id: `track-${trackIndex}`,
    data: {
      type: 'track',
      trackIndex
    }
  });

  return (
    <div
      ref={setNodeRef}
      className={`relative h-20 bg-gray-900/30 rounded-xl border transition-colors overflow-hidden
        ${isOver ? 'border-blue-400/50 bg-blue-400/10' : 'border-white/10'}`}
      style={{ minWidth: '600px' }} // Largeur minimum augmentée pour la timeline
    >
      {/* Grille de magnétisation */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => { // 25 lignes pour 120 secondes (5s interval)
          const seconds = i * 5;
          return (
            <div
              key={i}
              className="absolute top-0 bottom-0 border-l border-white/5"
              style={{ left: `${seconds * 8}px` }}
            />
          );
        })}
      </div>
      
      {children}
      
      {/* Indicateur de drop */}
      {isOver && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
          <span className="text-blue-400 text-xs font-medium bg-gray-900/80 px-3 py-1 rounded-lg">
            Déposer ici
          </span>
        </div>
      )}
    </div>
  );
};

// Modal de détail du projet
const ProjectModal = ({ project, onClose }: { project: Project | null; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          
          {/* Modal */}
          <motion.div
            className="relative max-w-2xl w-full bg-gradient-to-br from-gray-900/90 to-gray-800/90 
                       backdrop-blur-xl rounded-3xl p-8 border border-white/10"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* En-tête */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-xl">
                  {renderProjectIcon(project.image, "w-8 h-8 text-white")}
                </div>
                <div>
                  <h2 className="text-2xl font-light text-white mb-1">{project.title}</h2>
                  <div className="flex items-center gap-3 text-sm text-white/70">
                    <span>{project.category}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
              
              <motion.button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </motion.button>
            </div>

            {/* Description */}
            <p className="text-white/80 leading-relaxed mb-6 font-light">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span 
                  key={tag}
                  className="text-xs text-white/70 bg-white/10 px-3 py-1 rounded-full border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <motion.button
                className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-2xl font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Voir le projet
              </motion.button>
              
              <motion.button
                className="px-6 border border-white/30 text-white/80 py-3 rounded-2xl font-medium hover:bg-white/5 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Plus d&apos;infos
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function ProjectTimeline() {
  const [isMounted, setIsMounted] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [dragPreview, setDragPreview] = useState<{
    track: number;
    startTime: number;
    duration: number;
  } | null>(null);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null);
  
  // Configuration de la grille temporelle
  const PIXELS_PER_SECOND = 8;
  const SNAP_INTERVAL = 5; // Magnétisation toutes les 5 secondes

  const MAX_TIMELINE_DURATION = 120; // 2 minutes max
  
  // Fonctions utilitaires pour la magnétisation
  const snapToGrid = (timeInSeconds: number): number => {
    return Math.round(timeInSeconds / SNAP_INTERVAL) * SNAP_INTERVAL;
  };

  const pixelsToTime = (pixels: number): number => {
    return pixels / PIXELS_PER_SECOND;
  };

  const timeToPixels = (timeInSeconds: number): number => {
    return timeInSeconds * PIXELS_PER_SECOND;
  };

  // Détection des collisions
  const hasCollision = (
    newProject: { startTime: number; duration: number; track: number },
    existingProjects: Project[],
    excludeId?: string
  ): boolean => {
    const newEnd = newProject.startTime + newProject.duration;
    
    return existingProjects.some(project => {
      if (excludeId && project.id === excludeId) return false;
      if (project.track !== newProject.track) return false;
      
      const existingEnd = project.startTime + project.duration;
      
      // Vérification de chevauchement
      return !(newEnd <= project.startTime || newProject.startTime >= existingEnd);
    });
  };

  // Trouve la première position libre sur une piste
  const findFreePosition = (
    duration: number,
    track: number,
    preferredStartTime: number = 0,
    excludeId?: string
  ): number => {
    const trackProjects = projects
      .filter(p => p.track === track && (!excludeId || p.id !== excludeId))
      .sort((a, b) => a.startTime - b.startTime);

    // Essayer la position préférée d&apos;abord
    const snappedPreferred = snapToGrid(preferredStartTime);
    if (!hasCollision({ startTime: snappedPreferred, duration, track }, projects, excludeId)) {
      return snappedPreferred;
    }

    // Chercher avant la position préférée
    for (let time = snappedPreferred - SNAP_INTERVAL; time >= 0; time -= SNAP_INTERVAL) {
      if (!hasCollision({ startTime: time, duration, track }, projects, excludeId)) {
        return time;
      }
    }

    // Chercher après la position préférée
    for (let time = snappedPreferred + SNAP_INTERVAL; time <= MAX_TIMELINE_DURATION - duration; time += SNAP_INTERVAL) {
      if (!hasCollision({ startTime: time, duration, track }, projects, excludeId)) {
        return time;
      }
    }

    // Si rien trouvé, placer à la fin
    const lastProject = trackProjects[trackProjects.length - 1];
    if (lastProject) {
      return snapToGrid(lastProject.startTime + lastProject.duration);
    }

    return 0;
  };

  const [projects, setProjects] = useState<Project[]>([
    {
      id: '1',
      title: 'Rebrand Startup Tech',
      category: 'Identité Visuelle',
      year: 2024,
      color: '#3B82F6',
      image: 'rocket',
      description: 'Refonte complète de l\'identité visuelle d\'une startup technologique. Création du logo, charte graphique et déclinaisons sur tous les supports digitaux et print.',
      tags: ['Logo', 'Branding', 'Digital', 'Print'],
      startTime: 0,
      duration: 12,
      track: 0
    },
    {
      id: '2',
      title: 'Animation Promo SaaS',
      category: 'Montage Vidéo',
      year: 2024,
      color: '#10B981',
      image: 'video',
      description: 'Animation promotionnelle de 90 secondes pour le lancement d\'une solution SaaS. Motion graphics sophistiqués et storytelling visuel engageant.',
      tags: ['Animation', 'SaaS', 'Motion Graphics', 'Storytelling'],
      startTime: 0,
      duration: 18,
      track: 1
    },
    {
      id: '3',
      title: 'Campagne Social Media',
      category: 'Social Media',
      year: 2024,
      color: '#F59E0B',
      image: 'package',
      description: 'Création d&apos;une campagne complète pour les réseaux sociaux incluant templates animés, stories interactives et visuels publicitaires.',
      tags: ['Social', 'Templates', 'Instagram', 'Stories'],
      startTime: 15,
      duration: 12,
      track: 0
    },
    {
      id: '4',
      title: 'Interface Web App',
      category: 'UI/UX Design',
      year: 2023,
      color: '#8B5CF6',
      image: 'gem',
      description: 'Design d\'interface pour une application web B2B. Focus sur l\'expérience utilisateur et les micro-interactions pour une navigation fluide.',
      tags: ['UI/UX', 'Web App', 'B2B', 'Interactions'],
      startTime: 20,
      duration: 15,
      track: 1
    },
    {
      id: '5',
      title: 'Packaging Premium',
      category: 'Print Design',
      year: 2023,
      color: '#EF4444',
      image: 'package',
      description: 'Conception de packaging premium pour une marque de cosmétiques. Design épuré et moderne avec finitions spéciales.',
      tags: ['Packaging', 'Premium', 'Cosmétiques', 'Print'],
      startTime: 10,
      duration: 8,
      track: 2
    }
  ]);

  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
        delay: 100,
      },
    })
  );

  function handleDragStart(event: DragStartEvent) {
    setActiveId(event.active.id as string);
    document.body.style.overflow = 'hidden';
    
    // Tracker la position de la souris
    document.addEventListener('mousemove', updateMousePosition);
  }

  const updateMousePosition = (e: MouseEvent) => {
    // Vérifier que les coordonnées de souris sont valides
    if (typeof e.clientX === 'number' && typeof e.clientY === 'number' && 
        !isNaN(e.clientX) && !isNaN(e.clientY)) {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Mettre à jour le preview en temps réel si on est en train de faire du drag
      if (activeId) {
        // Utiliser requestAnimationFrame pour optimiser les performances
        requestAnimationFrame(() => {
          updateDragPreview(e.clientX, e.clientY);
        });
      }
    }
  };

  const updateDragPreview = (mouseX: number, mouseY: number) => {
    // Ne pas mettre à jour si pas de drag actif
    if (!activeId) {
      setDragPreview(null);
      return;
    }
    
    // Vérifier que les coordonnées sont valides
    if (typeof mouseX !== 'number' || typeof mouseY !== 'number' || 
        isNaN(mouseX) || isNaN(mouseY)) {
      return;
    }
    
    const draggedProject = projects.find(p => p.id === activeId);
    if (!draggedProject) {
      setDragPreview(null);
      return;
    }

    // Trouver la piste survolée en fonction de la position Y de la souris
    const timelineContainer = document.querySelector('[data-timeline-container]');
    if (!timelineContainer) return;

    const containerRect = timelineContainer.getBoundingClientRect();
    if (!containerRect || typeof containerRect.top !== 'number' || typeof containerRect.left !== 'number') {
      return;
    }
    
    const relativeY = mouseY - containerRect.top;
    
    // Calculer quelle piste est survolée (ajustement pour correspondre au drop réel)
    const headerHeight = 120; // Hauteur du header + info + règle temporelle
    const trackHeight = 100; // Hauteur d&apos;une piste (80px) + marge (20px)
    const trackIndex = Math.max(0, Math.min(2, Math.floor((relativeY - headerHeight) / trackHeight)));
    
    // Calculer la position temporelle en fonction de la position X
    const relativeX = mouseX - containerRect.left - 32; // 32px = padding gauche
    const proposedTime = Math.max(0, pixelsToTime(relativeX));
    const snappedTime = snapToGrid(proposedTime);
    
    // Vérifier si cette position est libre
    const wouldCollide = hasCollision(
      { startTime: snappedTime, duration: draggedProject.duration, track: trackIndex },
      projects,
      activeId as string
    );

    // Si collision, trouver une position libre
    const finalTime = wouldCollide 
      ? findFreePosition(draggedProject.duration, trackIndex, snappedTime, activeId as string)
      : snappedTime;

    // Mettre à jour le preview
    setDragPreview({
      track: trackIndex,
      startTime: finalTime,
      duration: draggedProject.duration
    });
  };

  function handleDragOver() {
    // La logique de preview se fait maintenant en temps réel via updateDragPreview
    // Cette fonction reste pour la compatibilité avec @dnd-kit
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    
    // Tracker l'interaction de drag
    trackTimelineInteraction('drag');
    
    const projectId = active.id as string;
    const draggedProject = projects.find(p => p.id === projectId);
    
    if (!draggedProject) {
      cleanup();
      return;
    }

    // Utiliser les données du preview si disponible (plus précis que over)
    if (dragPreview) {
      // Appliquer les changements basés sur le preview
      setProjects(prev => 
        prev.map(project => 
          project.id === projectId 
            ? { 
                ...project, 
                track: dragPreview.track,
                startTime: dragPreview.startTime
              }
            : project
        )
      );
    } else {
      // Fallback sur la logique originale
      let newTrack = draggedProject.track;
      let newStartTime = draggedProject.startTime;

      if (over?.data.current?.type === 'track') {
        newTrack = over.data.current.trackIndex;
        newStartTime = findFreePosition(
          draggedProject.duration,
          newTrack,
          draggedProject.startTime,
          projectId
        );
      }

      setProjects(prev => 
        prev.map(project => 
          project.id === projectId 
            ? { 
                ...project, 
                track: newTrack,
                startTime: newStartTime
              }
            : project
        )
      );
    }
    
    cleanup();
  }

  function handleDragCancel() {
    cleanup();
  }

  const cleanup = () => {
    setActiveId(null);
    setDragPreview(null);
    setMousePosition(null);
    document.body.style.overflow = '';
    document.removeEventListener('mousemove', updateMousePosition);
    // Force l'arrêt du preview
    setTimeout(() => {
      setDragPreview(null);
      setMousePosition(null);
    }, 50);
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900/60 to-gray-800/60 backdrop-blur-xl rounded-t-3xl p-8 border border-white/10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-3 h-8 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full" />
            <div>
              <h2 className="text-white font-light text-2xl mb-1">Portfolio Timeline</h2>
              <p className="text-white/60 text-sm">Glissez-déposez pour réorganiser • Cliquez pour voir les détails</p>
            </div>
          </div>
          
          <div className="text-white/60 text-sm bg-white/10 px-4 py-2 rounded-xl">
            {projects.length} projets
          </div>
        </div>
      </div>

      {/* Timeline des projets */}
      <div 
        className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-b-3xl border-x border-b border-white/10"
        data-timeline-container
      >
        {/* Info sur le système de magnétisation */}
        <div className="px-8 pt-4 pb-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-white/50">
              <span className="inline-flex items-center gap-1">
                <Lightbulb className="w-4 h-4" />
                Les projets se magnétisent toutes les {SNAP_INTERVAL}s pour éviter les superpositions
              </span>
            </span>
            <span className="text-white/40 font-mono">
              Grille: {SNAP_INTERVAL}s | Max: {MAX_TIMELINE_DURATION}s
            </span>
          </div>
        </div>
        
        {/* Règle temporelle */}
        <div className="px-8 pt-2 pb-4">
          <div className="relative h-8 bg-gray-900/50 rounded-lg overflow-hidden">
            {/* Graduations temporelles */}
            {Array.from({ length: 9 }).map((_, i) => {
              const seconds = i * 5;
              return (
                <div
                  key={i}
                  className="absolute top-0 bottom-0 border-l border-white/20"
                  style={{ left: `${seconds * 8}px` }}
                >
                  <span className="absolute -top-6 -translate-x-1/2 text-xs text-white/60 font-mono">
                    {seconds}s
                  </span>
                  {/* Sous-graduations */}
                  {i < 8 && Array.from({ length: 4 }).map((_, j) => (
                    <div
                      key={j}
                      className="absolute top-0 bottom-0 border-l border-white/10"
                      style={{ left: `${(j + 1) * 8}px` }}
                    />
                  ))}
                </div>
              );
            })}
          </div>
        </div>

        {/* Pistes de projets */}
        <div className="px-8 pb-8">
          {isMounted ? (
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragStart={handleDragStart}
              onDragOver={handleDragOver}
              onDragEnd={handleDragEnd}
              onDragCancel={handleDragCancel}
            >
              <SortableContext items={projects.map(p => p.id)} strategy={rectSortingStrategy}>
                {/* 3 pistes superposées */}
                {Array.from({ length: 3 }).map((_, trackIndex) => (
                <div key={trackIndex} className="relative mb-4">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-20 text-xs text-white/60 font-medium">
                      Piste {trackIndex + 1}
                    </div>
                  </div>
                  
                  {/* Zone de la piste */}
                  <TrackDropZone trackIndex={trackIndex}>
                    {/* Projets sur cette piste */}
                    {projects
                      .filter(project => project.track === trackIndex)
                      .map((project) => (
                        <SortableProject
                          key={project.id}
                          project={project}
                          onClick={(project) => {
                            trackProjectView(project.category);
                            trackTimelineInteraction('click');
                            setSelectedProject(project);
                          }}
                          pixelsPerSecond={8}
                        />
                      ))}
                    
                    {/* Preview de position pendant le drag */}
                    {activeId && dragPreview && dragPreview.track === trackIndex && (
                      <motion.div
                        className="absolute h-14 bg-blue-400/40 border-2 border-blue-400/80 rounded-xl pointer-events-none z-10 flex items-center justify-center backdrop-blur-sm"
                        style={{
                          left: `${timeToPixels(dragPreview.startTime)}px`,
                          width: `${timeToPixels(dragPreview.duration)}px`,
                          top: '50%'
                          // transform géré par les props animate/initial
                        }}
                        initial={{ 
                          opacity: 0, 
                          scale: 0.95,
                          transform: 'translateY(-50%) scale(0.95)'
                        }}
                        animate={{ 
                          opacity: 1, 
                          scale: 1,
                          transform: 'translateY(-50%) scale(1)',
                          boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
                        }}
                        transition={{ 
                          duration: 0.1,
                          ease: "easeOut"
                        }}
                        key={`${dragPreview.track}-${dragPreview.startTime}`} // Force re-render for smooth animation
                      >
                        {/* Effet de pulsation */}
                        <div className="absolute inset-0 bg-blue-400/20 rounded-xl animate-pulse" />
                        
                        {/* Indicateur de temps */}
                        <div className="relative z-10 flex flex-col items-center">
                          <span className="text-blue-400 text-xs font-bold drop-shadow-lg">
                            {dragPreview.startTime}s
                          </span>
                          <span className="text-blue-300 text-[10px] opacity-80">
                            {dragPreview.duration}s
                          </span>
                        </div>
                        
                        {/* Lignes de connexion aux points de snap */}
                        <div className="absolute -top-2 left-0 w-px h-4 bg-blue-400/60" />
                        <div className="absolute -bottom-2 left-0 w-px h-4 bg-blue-400/60" />
                      </motion.div>
                    )}
                    
                    {/* Zone de drop vide */}
                    {projects.filter(p => p.track === trackIndex).length === 0 && !dragPreview && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <span className="text-white/30 text-xs">Glissez un projet ici</span>
                      </div>
                    )}
                  </TrackDropZone>
                </div>
                ))}
              </SortableContext>
              {/* DragOverlay désactivé - on utilise notre overlay personnalisé */}
              <DragOverlay>
                {null}
              </DragOverlay>
            </DndContext>
          ) : (
            /* Version statique pendant l'hydratation */
            <>
              {Array.from({ length: 3 }).map((_, trackIndex) => (
                <div key={trackIndex} className="relative mb-4">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-20 text-xs text-white/60 font-medium">
                      Piste {trackIndex + 1}
                    </div>
                  </div>
                  
                  <div className="relative h-20 bg-gray-900/30 rounded-xl border border-white/10" style={{ minWidth: '320px' }}>
                    {projects
                      .filter(project => project.track === trackIndex)
                      .map((project) => (
                        <ProjectBlock
                          key={project.id}
                          project={project}
                          onClick={(project) => {
                            trackProjectView(project.category);
                            trackTimelineInteraction('click');
                            setSelectedProject(project);
                          }}
                          pixelsPerSecond={8}
                        />
                      ))}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
        
        {/* Contrôles */}
        <div className="px-8 pb-6 flex items-center justify-between border-t border-white/10 pt-6">
          <div className="flex items-center gap-4">
            <span className="text-white/60 text-sm">Durée totale: 40s</span>
            <span className="text-white/40">•</span>
            <span className="text-white/60 text-sm">{projects.length} projets</span>
          </div>
          
          <motion.button
            className="px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl
                       text-white/70 hover:text-white hover:bg-white/15 transition-colors text-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            + Nouveau projet
          </motion.button>
        </div>
      </div>
      
      {/* Modal de détail */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
      
      {/* Overlay personnalisé qui suit exactement le curseur */}
      {activeId && isMounted && mousePosition && (() => {
        const draggedProject = projects.find(p => p.id === activeId);
        if (!draggedProject || !mousePosition) return null;
        
        return createPortal(
          <div
            className="fixed pointer-events-none z-[9999]"
            style={{
              left: mousePosition.x - 40, // Offset pour centrer sur le curseur
              top: mousePosition.y - 28,  // Ajusté pour la nouvelle hauteur (h-14 = 56px / 2 = 28px)
              transform: 'translate3d(0, 0, 0)', // Force GPU acceleration
            }}
          >
            <DraggedProjectBlock 
              project={draggedProject} 
              pixelsPerSecond={8}
            />
          </div>,
          document.body
        );
      })()}
    </div>
  );
}