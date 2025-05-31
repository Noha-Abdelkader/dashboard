import { useLocale, useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();
  const locale = useLocale();
  return (
    <main>
      <div className="gap-5 grid grid-cols-2">
        <span className="text-red-200"> {locale} locale page </span>
        <div>
          <span>test locale switch</span>
          <div className="flex flex-col">
            <span>{t("home")}</span>
            <span>{t("about")}</span>
            <span>{t("contact")}</span>
          </div>
        </div>
      </div>
    </main>
  );
}
