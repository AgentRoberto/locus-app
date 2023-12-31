import React from 'react'
import styles from './styles.module.css'

export default function DatePickerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <main className={styles.main}>
        {children}
      </main>
    </>
  )
}
