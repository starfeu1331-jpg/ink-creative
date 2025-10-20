'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { 
  DndContext, 
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragStartEvent,
  DragOverlay
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  horizontalListSortingStrategy,
  useSortable
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface TimelineItem {
  id: string;
  title: string;
  duration: number;
  color: string;
  type: 'video' | 'audio' | 'image' | 'text';
}

interface SortableItemProps {
  item: TimelineItem;
}

// Composant pour afficher un élément de timeline
const TimelineItemComponent = ({ item }: { item: TimelineItem }) => (
  <div
    className="relative h-16 rounded-xl cursor-grab active:cursor-grabbing
               border border-white/20 backdrop-blur-xl shadow-lg
               flex items-center px-4 text-white text-sm font-medium
               flex-shrink-0 group overflow-hidden"
    style={{
      background: `linear-gradient(135deg, ${item.color}, ${item.color}88)`,
      width: `${Math.max(item.duration * 20, 120)}px`,
      minWidth: '120px'
    }}
  >
    {/* Effet de brillance au hover */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                    translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
    
    {/* Icône selon le type */}
    <div className="flex items-center gap-2 truncate relative z-10">
      <div className="w-3 h-3 rounded-full bg-white/80 flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-white" />
      </div>
      <span className="truncate font-medium">{item.title}</span>
    </div>
    
    {/* Forme d'onde factice pour audio */}
    {item.type === 'audio' && (
      <div className="absolute inset-x-2 bottom-2 flex items-end gap-0.5 opacity-30">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="w-0.5 bg-white rounded-full"
            style={{ height: `${Math.random() * 8 + 2}px` }}
          />
        ))}
      </div>
    )}
    
    {/* Indicateur de durée */}
    <div className="absolute bottom-1 right-2 text-xs text-white/80 font-mono">
      {item.duration}s
    </div>
    
    {/* Poignées de redimensionnement */}
    <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/0 hover:bg-white/20 cursor-ew-resize transition-colors" />
    <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/0 hover:bg-white/20 cursor-ew-resize transition-colors" />
  </div>
);

const SortableItem = ({ item }: SortableItemProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <motion.div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className={isDragging ? 'opacity-30' : 'opacity-100'}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <TimelineItemComponent item={item} />
    </motion.div>
  );
};

export default function Timeline() {
  const [isMounted, setIsMounted] = useState(false);
  const [items, setItems] = useState<TimelineItem[]>([
    {
      id: '1',
      title: 'Logo Reveal',
      duration: 3,
      color: '#3B82F6', // Blue
      type: 'video'
    },
    {
      id: '2', 
      title: 'Product Demo',
      duration: 8,
      color: '#10B981', // Green
      type: 'video'
    },
    {
      id: '3',
      title: 'Ambient Music',
      duration: 12,
      color: '#F59E0B', // Amber
      type: 'audio'
    },
    {
      id: '4',
      title: 'Call to Action',
      duration: 4,
      color: '#8B5CF6', // Purple
      type: 'video'
    },
    {
      id: '5',
      title: 'End Screen',
      duration: 2,
      color: '#EF4444', // Red
      type: 'image'
    }
  ]);

  const [currentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null);
  const totalDuration = Math.max(...items.map(item => item.duration));

  // Évite les problèmes d'hydratation
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5, // Distance plus courte mais avec délai
        delay: 150, // Délai plus long pour éviter les drags accidentels
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragStart(event: DragStartEvent) {
    console.log('Drag started:', event.active.id);
    setActiveId(event.active.id as string);
    
    // Empêche juste le scroll sans casser le layout
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
    
    // Écoute le mouvement de la souris
    document.addEventListener('mousemove', updateMousePosition, { passive: true });
  }

  const updateMousePosition = (e: MouseEvent) => {
    // Utilise requestAnimationFrame pour des mises à jour fluides
    requestAnimationFrame(() => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    });
  };

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
    
    setActiveId(null);
    setMousePosition(null);
    
    // Restaure simplement le scroll
    document.body.style.overflow = '';
    document.body.style.touchAction = '';
    
    // Retire l'écouteur
    document.removeEventListener('mousemove', updateMousePosition);
  }

  function handleDragCancel() {
    setActiveId(null);
    setMousePosition(null);
    
    // Restaure simplement le scroll
    document.body.style.overflow = '';
    document.body.style.touchAction = '';
    
    // Retire l'écouteur
    document.removeEventListener('mousemove', updateMousePosition);
  }

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };



  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header Timeline */}
      <div className="bg-gradient-to-r from-gray-900/60 to-gray-800/60 backdrop-blur-xl rounded-t-xl p-6 border border-white/10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full" />
            <h3 className="text-white font-light text-xl">Premiere Timeline</h3>
          </div>
          
          {/* Controls */}
          <div className="flex items-center gap-6">
            {/* Transport Controls */}
            <div className="flex items-center gap-2">
              <motion.button
                className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20
                           flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-0 h-0 border-r-[5px] border-r-white border-y-[3px] border-y-transparent" />
              </motion.button>
              
              <motion.button
                onClick={togglePlayback}
                className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 
                           flex items-center justify-center text-white shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                {isPlaying ? (
                  <div className="w-4 h-4 bg-white rounded-sm" />
                ) : (
                  <div className="w-0 h-0 border-l-[8px] border-l-white border-y-[6px] border-y-transparent ml-1" />
                )}
              </motion.button>
              
              <motion.button
                className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20
                           flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-0 h-0 border-l-[5px] border-l-white border-y-[3px] border-y-transparent" />
              </motion.button>
            </div>
            
            <div className="h-8 w-px bg-white/20" />
            
            <span className="text-white/80 text-sm font-mono bg-white/10 px-3 py-1 rounded-lg">
              {currentTime.toFixed(1)}s / {totalDuration}s
            </span>
          </div>
        </div>

        {/* Timeline ruler */}
        <div className="relative h-6 mb-4">
          <div className="absolute inset-0 bg-white/5 rounded">
            {/* Time markers */}
            {Array.from({ length: totalDuration + 1 }).map((_, i) => (
              <div
                key={i}
                className="absolute top-0 bottom-0 border-l border-white/20"
                style={{ left: `${(i / totalDuration) * 100}%` }}
              >
                <span className="absolute -top-5 -translate-x-1/2 text-xs text-white/50">
                  {i}s
                </span>
              </div>
            ))}
            
            {/* Playhead */}
            <motion.div
              className="absolute top-0 bottom-0 w-0.5 bg-red-500 z-10"
              style={{ left: `${(currentTime / totalDuration) * 100}%` }}
              animate={{ left: `${(currentTime / totalDuration) * 100}%` }}
            >
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-red-500 rounded-full" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Timeline Tracks */}
      <div className="bg-gray-800/50 backdrop-blur-xl rounded-b-xl p-4 border-x border-b border-white/10">
        {isMounted ? (
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onDragCancel={handleDragCancel}
          >
            <SortableContext items={items} strategy={horizontalListSortingStrategy}>
              <div className="flex gap-2 items-start overflow-x-auto pb-4">
                {items.map((item) => (
                  <SortableItem key={item.id} item={item} />
                ))}
              </div>
            </SortableContext>
            
            {/* DragOverlay vide pour éviter les erreurs */}
            <DragOverlay />
          </DndContext>
        ) : (
          // Placeholder pendant l'hydratation
          <div className="flex gap-2 items-start overflow-x-auto pb-4">
            {items.map((item) => (
              <TimelineItemComponent key={item.id} item={item} />
            ))}
          </div>
        )}
        
        {/* Add track button */}
        <motion.button
          className="mt-4 w-full h-10 border-2 border-dashed border-white/20 rounded-lg
                     text-white/50 hover:text-white/70 hover:border-white/30 transition-colors
                     flex items-center justify-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="text-lg">+</span>
          Ajouter un élément
        </motion.button>
      </div>
      
      {/* Overlay personnalisé rendu dans le body via portail */}
      {isMounted && activeId && mousePosition && createPortal(
        <div
          style={{
            position: 'fixed',
            left: mousePosition.x - 80, // Centré sur la souris
            top: mousePosition.y - 32,
            pointerEvents: 'none',
            zIndex: 999999, // Z-index très élevé
            transform: 'rotate(5deg) scale(1.1)',
            opacity: 0.8,
          }}
        >
          <TimelineItemComponent 
            item={items.find(item => item.id === activeId)!} 
          />
        </div>,
        document.body
      )}
    </div>
  );
}