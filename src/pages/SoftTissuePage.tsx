import LessonPage from '@/components/LessonPage'

const SoftTissuePage = () => {
  const sections = [
    {
      title: 'Dermatofibroma',
      content: (
        <>
          <p>
            <strong>Dermatofibroma (DF)</strong>, also called benign fibrous histiocytoma,
            is one of the most common benign mesenchymal tumors in skin.
          </p>

          <h4 className="font-semibold mt-4">Key Histologic Features</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Poorly circumscribed proliferation of bland spindled cells</li>
            <li>Centered in dermis</li>
            <li><strong>Epidermal hyperplasia</strong> ("dirty feet" at scanning power)</li>
            <li>Storiform pattern (pinwheel/cartwheel arrangement)</li>
            <li>Trapping of collagen bundles at periphery</li>
            <li>Hemosiderin deposition often present</li>
          </ul>

          <h4 className="font-semibold mt-4">Variants</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Cellular:</strong> Increased cellularity</li>
            <li><strong>Epithelioid:</strong> Epithelioid cells (can mimic melanoma)</li>
            <li><strong>Aneurysmal:</strong> Hemorrhagic spaces</li>
            <li><strong>Lipidized:</strong> Foamy histiocytes</li>
          </ul>

          <h4 className="font-semibold mt-4">Immunohistochemistry</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>CD34: Typically <strong>negative</strong></li>
            <li>Factor XIIIa: Positive</li>
          </ul>
        </>
      ),
      keyPoints: [
        'Epidermal hyperplasia ("dirty feet") is characteristic',
        'Storiform pattern in dermis',
        'CD34 negative (helps distinguish from DFSP)',
      ],
      pitfalls: [
        'Cellular and epithelioid variants can be alarming but are benign',
        'Rarely, dermatofibroma can recur after incomplete excision',
        'Aneurysmal variant can be confused with vascular tumor',
      ],
    },
    {
      title: 'Dermatofibrosarcoma Protuberans (DFSP)',
      content: (
        <>
          <p>
            <strong>DFSP</strong> is a locally aggressive fibroblastic tumor with high recurrence
            rate if incompletely excised. Metastasis is rare.
          </p>

          <h4 className="font-semibold mt-4">Key Histologic Features</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Monotonous spindle cells in storiform (cartwheel) pattern</li>
            <li>Infiltrative growth extending into subcutis</li>
            <li><strong>Honeycomb pattern</strong> in subcutis (tumor infiltrates between fat cells)</li>
            <li>Minimal cytologic atypia (deceptively bland)</li>
            <li>Mitoses present but usually not numerous</li>
            <li>No epidermal hyperplasia (vs dermatofibroma)</li>
          </ul>

          <h4 className="font-semibold mt-4">Immunohistochemistry</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>CD34: <strong>Diffusely positive</strong> (critical for diagnosis)</li>
            <li>Factor XIIIa: Negative</li>
          </ul>

          <h4 className="font-semibold mt-4">Molecular</h4>
          <p className="mt-2">
            COL1A1-PDGFB fusion (t(17;22)) in most cases
          </p>

          <h4 className="font-semibold mt-4">Bednar Tumor</h4>
          <p className="mt-2">
            DFSP with melanin-containing dendritic cells (pigmented DFSP variant)
          </p>
        </>
      ),
      keyPoints: [
        'Storiform pattern infiltrating into subcutis ("honeycomb")',
        'CD34 positive (dermatofibroma is negative)',
        'Locally aggressive - wide excision required',
      ],
      pitfalls: [
        'Bland cytology can lead to underdiagnosis',
        'Superficial biopsies may not show honeycomb subcutaneous infiltration',
        'Fibrosarcomatous transformation can occur (increased atypia, mitoses)',
      ],
    },
    {
      title: 'Atypical Fibroxanthoma and Pleomorphic Dermal Sarcoma',
      content: (
        <>
          <p>
            These represent a spectrum of pleomorphic spindle cell tumors on sun-damaged skin.
          </p>

          <h4 className="font-semibold mt-4">Atypical Fibroxanthoma (AFX)</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Dermal spindle and epithelioid cells with marked atypia</li>
            <li>Numerous mitoses, including atypical forms</li>
            <li>Limited to dermis (does NOT extend into subcutis)</li>
            <li>No vascular or perineural invasion</li>
            <li>Overlying ulceration common</li>
            <li>Sun-damaged skin (elderly patients, head/neck)</li>
          </ul>

          <h4 className="font-semibold mt-4">Pleomorphic Dermal Sarcoma (PDS)</h4>
          <p className="mt-2">
            Histologically similar to AFX but with:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Extension into subcutis, OR</li>
            <li>Vascular invasion, OR</li>
            <li>Perineural invasion, OR</li>
            <li>Necrosis</li>
          </ul>
          <p className="mt-2">
            PDS has metastatic potential and worse prognosis than AFX.
          </p>

          <h4 className="font-semibold mt-4">Immunohistochemistry</h4>
          <p className="mt-2">
            IHC is primarily used to <strong>exclude</strong> other entities:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Melanoma: S100, SOX10, MelanA negative</li>
            <li>SCC: p40, CK5/6 negative (or focal only)</li>
            <li>Sarcoma markers variable</li>
          </ul>
        </>
      ),
      keyPoints: [
        'AFX: Pleomorphic, limited to dermis, no bad features',
        'PDS: Pleomorphic with subcutaneous extension or vascular/perineural invasion',
        'Use IHC to exclude melanoma and SCC',
      ],
      pitfalls: [
        'AFX vs spindle cell melanoma: Critical to distinguish (S100, SOX10)',
        'AFX vs spindle cell SCC: Use p40, CK5/6',
        'Adequate sampling needed to assess depth and invasion',
      ],
    },
    {
      title: 'Kaposi Sarcoma',
      content: (
        <>
          <p>
            <strong>Kaposi sarcoma (KS)</strong> is a vascular tumor associated with HHV-8 infection,
            classically in immunosuppressed patients.
          </p>

          <h4 className="font-semibold mt-4">Key Histologic Features</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Spindle cell proliferation in dermis</li>
            <li>Slit-like vascular spaces containing red blood cells</li>
            <li>Extravasated red blood cells</li>
            <li>Hemosiderin deposition</li>
            <li>Hyaline (eosinophilic) globules (PAS-positive)</li>
            <li>Plasma cells in stroma</li>
          </ul>

          <h4 className="font-semibold mt-4">Stages</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Patch:</strong> Subtle vascular proliferation around existing vessels</li>
            <li><strong>Plaque:</strong> More prominent spindle cells, vascular channels</li>
            <li><strong>Nodular:</strong> Nodular mass with classic features</li>
          </ul>

          <h4 className="font-semibold mt-4">Immunohistochemistry</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>HHV-8 (LANA-1): <strong>Positive (nuclear)</strong> - highly specific</li>
            <li>CD31, CD34, ERG: Positive (vascular markers)</li>
          </ul>

          <h4 className="font-semibold mt-4">Clinical Types</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Classic: Elderly men, Mediterranean/Eastern European descent</li>
            <li>AIDS-associated: Most common type currently</li>
            <li>Endemic (African)</li>
            <li>Iatrogenic (immunosuppression)</li>
          </ul>
        </>
      ),
      keyPoints: [
        'Spindle cells with slit-like vascular spaces',
        'Extravasated RBCs and hemosiderin',
        'HHV-8 (LANA-1) is diagnostic',
      ],
      pitfalls: [
        'Patch stage can be very subtle and easily missed',
        'Early KS can mimic benign vascular proliferation',
        'Consider in all immunosuppressed patients with vascular lesions',
      ],
    },
    {
      title: 'Leiomyoma and Leiomyosarcoma',
      content: (
        <>
          <h4 className="font-semibold">Cutaneous Leiomyoma</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Fascicles of smooth muscle cells in dermis</li>
            <li>Elongated, blunt-ended ("cigar-shaped") nuclei</li>
            <li>Eosinophilic cytoplasm</li>
            <li>Benign, often painful</li>
            <li>Piloleiomyoma (from arrector pili muscle) most common</li>
          </ul>

          <h4 className="font-semibold mt-4">Leiomyosarcoma</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Increased cellularity and atypia</li>
            <li>Increased mitoses ({">"} 2 per 10 HPF concerning)</li>
            <li>Necrosis (tumor necrosis, not just ischemic)</li>
            <li>Infiltrative growth</li>
            <li>Can metastasize</li>
          </ul>

          <h4 className="font-semibold mt-4">Immunohistochemistry</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Desmin: Positive</li>
            <li>Smooth muscle actin: Positive</li>
            <li>h-Caldesmon: Positive</li>
          </ul>
        </>
      ),
      keyPoints: [
        'Leiomyoma: Benign smooth muscle, often painful',
        'Leiomyosarcoma: Atypia + increased mitoses + necrosis',
        'Smooth muscle markers confirm diagnosis',
      ],
    },
  ]

  return (
    <LessonPage
      title="Soft Tissue Mimics in Skin"
      icon="🧬"
      description="Dermatofibroma, DFSP, atypical fibroxanthoma, and Kaposi"
      sections={sections}
      color="bg-green-500/10 text-green-500"
    />
  )
}

export default SoftTissuePage
