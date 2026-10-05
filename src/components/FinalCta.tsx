import { ArrowRight, Phone } from "lucide-react";
import { BUSINESS } from "../lib/content";
import { useFormModal } from "../lib/formModal";

/** Vienintelė pilnai žalia plokštuma puslapyje – paskutinis kvietimas veikti. */
export default function FinalCta() {
  const { openForm } = useFormModal();
  return (
    <section className="px-4 py-12 lg:px-8 lg:py-20">
      <div className="reveal relative mx-auto max-w-[1320px] overflow-hidden rounded-[28px] bg-signal px-6 py-14 sm:px-12 sm:py-20 lg:px-16 lg:py-24">
        {/* Didžiulis tachometro žiedas – logotipo „O“ kaip fono ženklas */}
        <svg
          viewBox="0 0 100 100"
          className="pointer-events-none absolute -right-16 -top-16 h-[340px] w-[340px] text-ink-900 opacity-[0.07] sm:-right-10 sm:-top-24 sm:h-[520px] sm:w-[520px] lg:-right-16 lg:-top-32 lg:h-[680px] lg:w-[680px]"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M50 0a50 50 0 1 0 0 100A50 50 0 0 0 50 0Z M50 21a29 29 0 1 1 0 58 29 29 0 0 1 0-58Z M21.5 21.5 34 27l-7 7Z"
            fill="currentColor"
          />
        </svg>

        <div className="relative max-w-[16ch] sm:max-w-[20ch]">
          <span className="label-mono !text-ink-900">Paskutinis žingsnis</span>
          <h2 className="mt-5 text-[clamp(2.6rem,8.4vw,6.2rem)] text-ink-900">
            Laikas parduoti automobilį?
          </h2>
        </div>
        <p className="relative mt-6 max-w-[46ch] text-[17px] leading-[1.6] text-ink-900/80 sm:text-[18.5px]">
          Gaukite pasiūlymą iš MOTIVUS ir parduokite automobilį be nereikalingų
          rūpesčių.
        </p>
        <div className="relative mt-10 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={openForm}
            className="btn group w-full !min-h-[58px] !bg-ink-900 !px-8 !text-[16px] !text-signal hover:!bg-ink-800 sm:w-auto"
          >
            Gauti pasiūlymą
            <ArrowRight
              size={19}
              strokeWidth={2.4}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </button>
          <a
            href={BUSINESS.phoneHref}
            className="btn w-full !min-h-[58px] border-2 border-ink-900 !px-7 num !text-[16px] !font-bold !text-ink-900 transition-colors hover:!bg-ink-900/10 sm:w-auto"
          >
            <Phone size={17} strokeWidth={2.4} />
            {BUSINESS.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
