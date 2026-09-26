'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa'
import type { Screenshot } from '@/lib/data'

/** A project's cover screenshot; clicking it opens every screenshot full size. */
export default function Screenshots({ title, images }: { title: string; images: Screenshot[] }) {
  const dialog = useRef<HTMLDialogElement>(null)
  const [index, setIndex] = useState(0)

  const open = (i: number) => {
    setIndex(i)
    dialog.current?.showModal()
  }
  const step = (by: number) => setIndex((i) => (i + by + images.length) % images.length)

  useEffect(() => {
    const el = dialog.current
    if (!el) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    el.addEventListener('keydown', onKey)
    return () => el.removeEventListener('keydown', onKey)
  })

  const current = images[index]

  return (
    <>
      <button
        type="button"
        onClick={() => open(0)}
        aria-label={`View ${images.length} screenshots of ${title}`}
        className="group/shot relative mb-5 block overflow-hidden rounded-lg border border-border"
      >
        <Image
          src={images[0].src}
          alt={images[0].alt}
          width={images[0].width}
          height={images[0].height}
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          className="aspect-[16/10] w-full object-cover object-top transition-transform duration-300 group-hover/shot:scale-[1.02]"
        />
        {images.length > 1 && (
          <span className="absolute right-2 bottom-2 rounded-full bg-bg/80 px-2 py-0.5 font-mono text-xs text-fg backdrop-blur">
            1 / {images.length}
          </span>
        )}
      </button>

      <dialog
        ref={dialog}
        aria-label={`${title} screenshots`}
        onClick={(e) => e.target === dialog.current && dialog.current?.close()}
        className="m-auto max-h-[92vh] w-[min(1280px,94vw)] rounded-xl border border-border bg-surface p-0 text-fg backdrop:bg-black/80"
      >
        <div className="flex items-center justify-between gap-4 border-b border-border px-4 py-3 text-sm">
          <span className="truncate text-muted">{current.alt}</span>
          <span className="flex shrink-0 items-center gap-3">
            <span className="font-mono text-xs text-muted">
              {index + 1} / {images.length}
            </span>
            <button type="button" onClick={() => dialog.current?.close()} aria-label="Close" className="text-muted hover:text-fg">
              <FaTimes />
            </button>
          </span>
        </div>
        <div className="relative">
          <Image
            src={current.src}
            alt={current.alt}
            width={current.width}
            height={current.height}
            sizes="94vw"
            className="h-auto max-h-[80vh] w-full object-contain"
          />
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous screenshot"
                className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full border border-border bg-bg/80 p-2.5 text-fg backdrop-blur hover:border-accent"
              >
                <FaChevronLeft size={14} />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next screenshot"
                className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full border border-border bg-bg/80 p-2.5 text-fg backdrop-blur hover:border-accent"
              >
                <FaChevronRight size={14} />
              </button>
            </>
          )}
        </div>
      </dialog>
    </>
  )
}
