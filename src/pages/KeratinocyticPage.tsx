import LessonPage from '@/components/LessonPage'

const KeratinocyticPage = () => {
  const sections = [
    {
      title: 'Actinic Keratosis',
      content: (
        <>
          <p>
            <strong>Actinic keratosis (AK)</strong> is a precursor lesion for squamous cell carcinoma,
            showing dysplastic keratinocytes confined to the epidermis.
          </p>

          <h4 className="font-semibold mt-4">Key Histologic Features</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Atypical keratinocytes at lower epidermis</li>
            <li>Retained polarity (nuclei aligned toward basement membrane)</li>
            <li>Parakeratosis overlying atypical epidermis</li>
            <li>Alternating ortho- and parakeratosis ("flag sign")</li>
            <li>Solar elastosis in underlying dermis</li>
            <li>Does NOT breach the basement membrane</li>
          </ul>

          <h4 className="font-semibold mt-4">Variants</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Hypertrophic AK:</strong> Marked hyperkeratosis</li>
            <li><strong>Atrophic AK:</strong> Thin epidermis with basal atypia</li>
            <li><strong>Bowenoid AK:</strong> Full-thickness atypia (borderline with SCC in situ)</li>
            <li><strong>Acantholytic AK:</strong> Suprabasal separation mimicking Darier</li>
          </ul>
        </>
      ),
      keyPoints: [
        'AK = dysplasia confined to lower epidermis with retained polarity',
        'Solar elastosis indicates chronic sun damage',
        'Parakeratosis overlying atypia is typical',
      ],
      pitfalls: [
        'Bowenoid AK vs SCC in situ: Overlapping spectrum, may be semantic',
        'Hypertrophic AK can be confused with squamous cell carcinoma',
        'Acantholytic variant can mimic Darier disease',
      ],
    },
    {
      title: 'Squamous Cell Carcinoma In Situ (Bowen Disease)',
      content: (
        <>
          <p>
            <strong>SCC in situ</strong> shows full-thickness epidermal dysplasia without invasion
            through the basement membrane.
          </p>

          <h4 className="font-semibold mt-4">Key Histologic Features</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Full-thickness epidermal atypia (all layers)</li>
            <li>Loss of normal maturation</li>
            <li>Atypical mitoses at multiple levels</li>
            <li>Crowded, hyperchromatic nuclei</li>
            <li>Multinucleated keratinocytes (characteristic but not specific)</li>
            <li>Dyskeratotic cells throughout epidermis</li>
            <li>Intact basement membrane (PAS stain can help)</li>
          </ul>
        </>
      ),
      keyPoints: [
        'Full-thickness atypia distinguishes from AK',
        'Basement membrane must be intact for in situ diagnosis',
        'Risk of progression to invasive SCC',
      ],
      pitfalls: [
        'Differentiation from invasive SCC requires careful assessment of basement membrane',
        'Pagetoiddyskeratosis can mimic melanoma - keratin stains help',
        'vs. LSC (lichen simplex chronicus) with reactive atypia',
      ],
    },
    {
      title: 'Invasive Squamous Cell Carcinoma',
      content: (
        <>
          <p>
            <strong>Invasive SCC</strong> shows malignant keratinocytes invading through the
            basement membrane into the dermis.
          </p>

          <h4 className="font-semibold mt-4">Key Histologic Features</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Irregular nests and cords of atypical keratinocytes invading dermis</li>
            <li>Keratin pearl formation (well-differentiated)</li>
            <li>Individual cell keratinization</li>
            <li>Nuclear atypia, hyperchromasia</li>
            <li>Mitotic figures, including atypical forms</li>
            <li>Desmoplastic stromal response</li>
          </ul>

          <h4 className="font-semibold mt-4">Grading</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Well-differentiated:</strong> Keratin pearls, obvious squamous differentiation</li>
            <li><strong>Moderately differentiated:</strong> Less keratinization, more atypia</li>
            <li><strong>Poorly differentiated:</strong> Minimal keratinization, marked atypia</li>
          </ul>

          <h4 className="font-semibold mt-4">High-Risk Features</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Depth {">"} 4mm or invasion beyond subcutis</li>
            <li>Perineural invasion</li>
            <li>Poorly differentiated</li>
            <li>Location (ear, lip)</li>
            <li>Immunosuppressed patient</li>
          </ul>
        </>
      ),
      keyPoints: [
        'Invasion through basement membrane = invasive SCC',
        'Report depth, differentiation, perineural invasion',
        'High-risk features determine need for additional therapy',
      ],
      pitfalls: [
        'Pseudoepitheliomatous hyperplasia can mimic SCC',
        'Keratoacanthoma vs SCC: Controversial, often treated as SCC',
        'Poorly differentiated SCC may require IHC (p40, CK5/6) to confirm',
      ],
    },
    {
      title: 'Basal Cell Carcinoma',
      content: (
        <>
          <p>
            <strong>BCC</strong> is the most common cutaneous malignancy, showing basaloid
            proliferation with characteristic features.
          </p>

          <h4 className="font-semibold mt-4">Key Histologic Features</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Nests and lobules of basaloid cells</li>
            <li><strong>Peripheral palisading:</strong> Outer layer of cells aligned perpendicular to stroma</li>
            <li><strong>Retraction artifact:</strong> Clefting between tumor and stroma (highly characteristic)</li>
            <li>High nuclear-to-cytoplasmic ratio</li>
            <li>Apoptotic bodies and mitoses common</li>
            <li>Mucin in stroma (variable)</li>
          </ul>

          <h4 className="font-semibold mt-4">Subtypes</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Nodular:</strong> Most common, well-circumscribed nodules</li>
            <li><strong>Superficial:</strong> Buds of basaloid cells from epidermis, multifocal</li>
            <li><strong>Infiltrative:</strong> Irregular cords, minimal retraction, higher recurrence</li>
            <li><strong>Morpheaform:</strong> Thin strands in sclerotic stroma, aggressive</li>
            <li><strong>Micronodular:</strong> Small rounded nests, infiltrative growth</li>
            <li><strong>Basosquamous:</strong> Features of both BCC and SCC, more aggressive</li>
          </ul>
        </>
      ),
      keyPoints: [
        'Peripheral palisading + retraction artifact = BCC',
        'Nodular subtype is most common and has lowest recurrence',
        'Infiltrative, morpheaform, micronodular subtypes are higher risk',
      ],
      pitfalls: [
        'Basosquamous carcinoma behaves more aggressively - treat as SCC',
        'Trichoepithelioma can mimic BCC (papillary mesenchymal bodies help)',
        'Ensure clear margins - incomplete excision is common',
      ],
    },
    {
      title: 'Keratoacanthoma',
      content: (
        <>
          <p>
            <strong>Keratoacanthoma (KA)</strong> is a rapidly growing nodule with central keratin-filled
            crater. Controversial whether it's a variant of SCC or distinct entity.
          </p>

          <h4 className="font-semibold mt-4">Classic Architecture</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Symmetric, cup-shaped or crater-like silhouette</li>
            <li>Central keratin-filled invagination</li>
            <li>Keratinocyte proliferation with pushing borders</li>
            <li>Prominent eosinophilic cytoplasm ("glassy")</li>
            <li>Microabscesses at base</li>
          </ul>

          <h4 className="font-semibold mt-4">KA vs SCC</h4>
          <p className="mt-2">
            Many pathologists diagnose KA as "well-differentiated SCC, keratoacanthoma-type"
            because:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Distinction on partial biopsies is often impossible</li>
            <li>Some KAs can behave aggressively</li>
            <li>Treatment is usually excision regardless</li>
          </ul>
        </>
      ),
      keyPoints: [
        'Classic KA: symmetric, crater-like, glassy cells, pushing borders',
        'Many pathologists treat as SCC due to overlap',
        'Complete excision is recommended',
      ],
      pitfalls: [
        'Partial (shave) biopsies cannot reliably distinguish KA from SCC',
        'Some KAs show infiltrative growth indistinguishable from SCC',
        'Conservative excision may be inadequate for aggressive variants',
      ],
    },
  ]

  return (
    <LessonPage
      title="Keratinocytic Lesions"
      icon="🔶"
      description="Actinic keratosis, SCC, BCC, and related neoplasms"
      sections={sections}
      color="bg-orange-500/10 text-orange-500"
    />
  )
}

export default KeratinocyticPage
