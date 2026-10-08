import MerchHero from "../components/merch/MerchHero";
import MerchEditorialBlock from "../components/merch/MerchEditorialBlock";
import MerchLeatherGoodsBlock from "../components/merch/MerchLeatherGoodsBlock";
import MerchPantsBlock from "../components/merch/MerchPantsBlock";
import MerchJacketsBlock from "../components/merch/MerchJacketsBlock";
import MerchFootwearBlock from "../components/merch/MerchFootwearBlock";
import MerchToteBagsBlock from "../components/merch/MerchToteBagsBlock";
import MerchFilmBlock from "../components/merch/MerchFilmBlock";
import MerchCollection from "../components/merch/MerchCollection";

export default function Merch() {
  return (
    <main className="min-h-screen bg-black text-white">

      <MerchHero />

      {/* Chapter 01 */}
      <MerchEditorialBlock />

      {/* Chapter 02 */}
      <MerchLeatherGoodsBlock />

      {/* Chapter 03 */}
      <MerchPantsBlock />

      {/* Chapter 04 */}
      <MerchJacketsBlock />

      {/* Chapter 05 */}
      <MerchFootwearBlock />

      {/* Chapter 06 */}
      <MerchToteBagsBlock />

      {/* Final Editorial Statement */}
      <MerchFilmBlock />

      {/* Commissions */}
      <MerchCollection />

    </main>
  );
}
