import Link from "next/link";
import { STATE_INDEX } from "@/data/stateIndex";

const THIRTY_DAY = new Set([
  "california",
  "montana",
  "arkansas",
  "louisiana",
  "iowa",
]);

export function StateRulesTable() {
  const rows = [...STATE_INDEX].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <section className="w-full bg-white px-4 py-14 sm:px-8 lg:px-[78px]">
      <div className="mx-auto max-w-[1100px]">
        <h2 className="heading-h2 text-primary">ESA letter rules by state</h2>
        <p className="body-large mt-3 max-w-[760px] text-body-text">
          Federal housing rules come from the Fair Housing Act. A few states also require an established relationship with the clinician before ESA documentation is issued. Confirm the current rule on the state page.
        </p>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <caption className="sr-only">State ESA letter requirements</caption>
            <thead>
              <tr className="border-b border-primary/20">
                <th className="py-3 pr-4 font-semibold text-primary">State</th>
                <th className="py-3 pr-4 font-semibold text-primary">30-day relationship</th>
                <th className="py-3 font-semibold text-primary">ESA letter page</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((state) => (
                <tr key={state.slug} className="border-b border-black/5">
                  <td className="py-3 pr-4 text-body-text">{state.name}</td>
                  <td className="py-3 pr-4 text-body-text">{THIRTY_DAY.has(state.slug) ? "Yes" : "No state rule listed"}</td>
                  <td className="py-3">
                    <Link prefetch={false} href={`/esa-letter-${state.slug}/`} className="font-semibold text-primary underline">
                      ESA letter in {state.name}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="body-small mt-4 max-w-[760px] text-body-text">
          Sources: Fair Housing Act, 42 U.S.C. §§ 3601–3619; HUD assistance-animal guidance, including the May 22, 2026 enforcement memo; and the state statutes summarized on each state page. This table is not legal advice.
        </p>
      </div>
    </section>
  );
}
