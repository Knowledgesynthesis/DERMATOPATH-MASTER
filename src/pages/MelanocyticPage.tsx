import LessonPage from '@/components/LessonPage'

const MelanocyticPage = () => {
  const sections = [
    {
      title: 'Normal Melanocytes and Distribution',
      content: (
        <>
          <p>
            Normal melanocytes reside at the dermal-epidermal junction, typically as solitary units
            distributed at regular intervals along the basal layer.
          </p>

          <h4 className="font-semibold mt-4">Key Concepts</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Melanocytes transfer melanin to surrounding keratinocytes via dendrites</li>
            <li>Normal distribution: solitary units at basal layer</li>
            <li>Melanocytes are NOT normally present in suprabasal epidermis</li>
            <li>Melanocytes are NOT normally present in dermis (with rare exceptions)</li>
          </ul>
        </>
      ),
      keyPoints: [
        'Normal melanocytes: basal layer, solitary units, regular spacing',
        'Any nested pattern or dermal melanocytes = melanocytic proliferation',
        'Pagetoid spread (suprabasal melanocytes) is concerning for melanoma',
      ],
    },
    {
      title: 'Benign Melanocytic Nevi',
      content: (
        <>
          <h4 className="font-semibold">Junctional Nevus</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Nests of nevus cells at the dermal-epidermal junction</li>
            <li>No dermal component</li>
            <li>Typically symmetric, well-circumscribed</li>
          </ul>

          <h4 className="font-semibold mt-4">Compound Nevus</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Junctional AND dermal components</li>
            <li>Shows maturation: cells become smaller and more spindled in deeper dermis</li>
            <li>Symmetric silhouette</li>
          </ul>

          <h4 className="font-semibold mt-4">Intradermal Nevus</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Nevus cells only in dermis, no junctional component</li>
            <li>Type A cells (superficial), B cells (mid), C cells (deep)</li>
            <li>Maturation toward base</li>
          </ul>

          <h4 className="font-semibold mt-4">Features of Benign Nevi</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Symmetry:</strong> Architectural and cytologic symmetry</li>
            <li><strong>Circumscription:</strong> Well-defined lateral borders</li>
            <li><strong>Maturation:</strong> Cells become smaller and less pigmented with depth</li>
            <li><strong>Cohesion:</strong> Cells are cohesive, uniform</li>
            <li><strong>No cytologic atypia:</strong> Bland, uniform nuclei</li>
          </ul>
        </>
      ),
      keyPoints: [
        'Maturation (cells smaller at base) is a key benign feature',
        'Symmetry at low power is reassuring',
        'Cohesive nests with bland cytology suggest benign nevus',
      ],
      pitfalls: [
        'Congenital nevi can have unusual features but are usually recognized clinically',
        'Recurrent nevi after partial removal can show concerning features',
        'Nevus in special sites (acral, genital) may have architectural disorder',
      ],
    },
    {
      title: 'Dysplastic (Atypical) Nevus',
      content: (
        <>
          <p>
            Dysplastic nevi show architectural disorder and cytologic atypia, but fall short
            of melanoma.
          </p>

          <h4 className="font-semibold mt-4">Architectural Features</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Lentiginous melanocytic hyperplasia (increased single cells at junction)</li>
            <li>Bridging of rete ridges by junctional nests</li>
            <li>Shoulder phenomenon (junctional component extends beyond dermal nests)</li>
            <li>Random cytologic atypia</li>
          </ul>

          <h4 className="font-semibold mt-4">Stromal Features</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Lamellar fibroplasia (concentric collagen around rete ridges)</li>
            <li>Lymphocytic infiltrate</li>
          </ul>

          <h4 className="font-semibold mt-4">Grading Dysplasia</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Mild:</strong> Minimal architectural disorder, minimal atypia</li>
            <li><strong>Moderate:</strong> More prominent features, still maturation present</li>
            <li><strong>Severe:</strong> Significant atypia, approaching melanoma in situ threshold</li>
          </ul>
        </>
      ),
      keyPoints: [
        'Dysplastic nevus = architectural disorder + cytologic atypia',
        'Shoulder phenomenon is common in dysplastic nevi',
        'Presence of maturation favors dysplastic nevus over melanoma',
      ],
      pitfalls: [
        'Dysplastic nevus vs melanoma in situ: Extremely challenging distinction',
        'Severe dysplasia may warrant complete excision to exclude melanoma',
        'Inter-observer variability is high in grading dysplastic nevi',
      ],
    },
    {
      title: 'Melanoma In Situ',
      content: (
        <>
          <p>
            Melanoma in situ shows malignant melanocytes confined to the epidermis,
            without dermal invasion.
          </p>

          <h4 className="font-semibold mt-4">Key Features</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Confluent growth of atypical melanocytes along the junction</li>
            <li>Pagetoid spread (melanocytes ascending into spinous and granular layers)</li>
            <li>Marked cytologic atypia (large nuclei, prominent nucleoli)</li>
            <li>Loss of maturation</li>
            <li>Consumption of epidermis (thinning due to melanocyte proliferation)</li>
            <li>Asymmetry</li>
          </ul>

          <h4 className="font-semibold mt-4">Lentigo Maligna (Sun-Damaged Skin)</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Atypical melanocytes along basal layer</li>
            <li>Extension down follicles</li>
            <li>Severely sun-damaged dermis</li>
          </ul>
        </>
      ),
      keyPoints: [
        'Pagetoid spread is a red flag for melanoma',
        'Confluence and asymmetry distinguish from dysplastic nevus',
        'Complete excision with clear margins is required',
      ],
      pitfalls: [
        'Severely dysplastic nevus vs melanoma in situ: One of the hardest calls in dermpath',
        'Pagetoid spread can be seen in Spitz nevi (typically younger patients)',
        'Recurrent nevi can mimic melanoma in situ',
      ],
    },
    {
      title: 'Invasive Melanoma',
      content: (
        <>
          <p>
            Invasive melanoma shows malignant melanocytes invading into the dermis.
          </p>

          <h4 className="font-semibold mt-4">Architectural Red Flags</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Asymmetry:</strong> Irregular silhouette and architecture</li>
            <li><strong>Poor circumscription:</strong> Ill-defined lateral margins</li>
            <li><strong>Lack of maturation:</strong> Cells remain large or enlarge with depth</li>
            <li><strong>Pagetoid spread:</strong> Melanocytes scattered throughout epidermis</li>
            <li><strong>Consumption of epidermis:</strong> Epidermal thinning</li>
          </ul>

          <h4 className="font-semibold mt-4">Cytologic Red Flags</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Marked nuclear pleomorphism</li>
            <li>Large nucleoli</li>
            <li>Mitotic figures (especially deep or atypical mitoses)</li>
            <li>Necrosis</li>
          </ul>

          <h4 className="font-semibold mt-4">Breslow Depth and Staging</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Measured from granular layer to deepest invasive cell</li>
            <li>Most important prognostic factor</li>
            <li>Also report ulceration, mitotic rate, microsatellites</li>
          </ul>
        </>
      ),
      keyPoints: [
        'Lack of maturation is critical for melanoma diagnosis',
        'Deep or atypical mitoses are highly concerning',
        'Breslow depth drives staging and prognosis',
      ],
      pitfalls: [
        'Spitz nevus vs melanoma: Especially difficult in children',
        'Nevoid melanoma: Bland-appearing melanoma cells',
        'Desmoplastic melanoma: Spindle cells in fibrotic dermis, easily missed',
      ],
    },
    {
      title: 'Special Melanocytic Lesions',
      content: (
        <>
          <h4 className="font-semibold">Blue Nevus</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Dermal melanocytes (no junctional component)</li>
            <li>Dendritic or spindled melanocytes</li>
            <li>Dermal location, often mid-to-deep dermis</li>
            <li>Heavily pigmented</li>
          </ul>

          <h4 className="font-semibold mt-4">Spitz Nevus</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Large epithelioid and/or spindled melanocytes</li>
            <li>Often in children and young adults</li>
            <li>May show pagetoid spread (concerning but not always melanoma)</li>
            <li>Kamino bodies (eosinophilic globules at dermal-epidermal junction)</li>
            <li>Symmetry and maturation favor Spitz nevus</li>
          </ul>

          <h4 className="font-semibold mt-4">Halo Nevus</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Dense lymphocytic infiltrate surrounding and infiltrating nevus</li>
            <li>Represents immune regression of nevus</li>
            <li>Clinically depigmented halo around nevus</li>
          </ul>
        </>
      ),
      keyPoints: [
        'Blue nevus: dermal only, heavily pigmented, dendritic cells',
        'Spitz nevus: large epithelioid/spindled cells, often in young patients',
        'Atypical Spitz tumors may require expert consultation',
      ],
      pitfalls: [
        'Spitz nevus vs melanoma: Extremely challenging, especially in adults',
        'Cellular blue nevus can be locally aggressive',
        'Halo phenomenon can occur around melanoma',
      ],
    },
  ]

  return (
    <LessonPage
      title="Melanocytic Lesions"
      icon="⚫"
      description="Nevi, dysplastic nevi, melanoma in situ, and invasive melanoma concepts"
      sections={sections}
      color="bg-purple-500/10 text-purple-500"
    />
  )
}

export default MelanocyticPage
