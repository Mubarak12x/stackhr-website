/**
 * Renders a JSON-LD structured-data block. Next.js's metadata API has no
 * built-in support for structured data, so this is the manual
 * <script type="application/ld+json"> pattern Next's own docs recommend.
 * Safe to use in both server and client components — it has no hooks.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
