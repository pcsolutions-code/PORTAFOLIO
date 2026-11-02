import { useEffect, useRef } from "react";
import { asset } from "../lib";

const Chevron = ({ dir }) => (
  <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false">
    <path
      d={dir === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"}
      fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
    />
  </svg>
);

export default function Lightbox({ title, images, index, onIndex, onClose }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const total = images.length;
  const img = images[index];
  const go = (step) => onIndex((index + step + total) % total);

  // Al abrir: bloquear el scroll y enfocar el botón de cerrar; al cerrar, devolver el foco.
  useEffect(() => {
    const previous = document.activeElement;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = overflow;
      previous?.focus?.();
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "Tab") {
        const items = dialogRef.current?.querySelectorAll("button");
        if (!items?.length) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Capturas de ${title}`}
      ref={dialogRef}
      onClick={onClose}
    >
      <button ref={closeRef} type="button" className="lightbox__btn lightbox__close" onClick={onClose} aria-label="Cerrar">
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
          <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      </button>

      {total > 1 && (
        <button type="button" className="lightbox__btn lightbox__prev" aria-label="Captura anterior"
          onClick={(e) => { e.stopPropagation(); go(-1); }}>
          <Chevron dir="left" />
        </button>
      )}

      <figure className="lightbox__fig" onClick={(e) => e.stopPropagation()}>
        <img key={img.file} src={asset(`${img.file}.webp`)} alt={img.alt} />
        <figcaption>
          <span>{img.alt}</span>
          <span className="lightbox__count">{index + 1} de {total}</span>
        </figcaption>
      </figure>

      {total > 1 && (
        <button type="button" className="lightbox__btn lightbox__next" aria-label="Captura siguiente"
          onClick={(e) => { e.stopPropagation(); go(1); }}>
          <Chevron dir="right" />
        </button>
      )}
    </div>
  );
}
