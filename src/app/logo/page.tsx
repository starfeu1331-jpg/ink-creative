'use client'

import { InkLiquidFill } from '@/components/animations/InkLiquidFill'

export default function LogoPage() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'transparent',
      margin: 0,
      padding: 0
    }}>
      <InkLiquidFill width={200} height={150} />
    </div>
  )
}
