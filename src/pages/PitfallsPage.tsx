import LessonPage from '@/components/LessonPage'

const PitfallsPage = () => {
  const sections = [
    {
      title: 'Spongiotic Dermatitis vs Mycosis Fungoides',
      content: (
        <>
          <p>
            One of the most challenging diagnostic dilemmas in dermatopathology is distinguishing
            chronic spongiotic dermatitis from early mycosis fungoides (MF).
          </p>

          <h4 className="font-semibold mt-4">Features Favoring MF</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Atypical lymphocytes with cerebriform nuclei</li>
            <li>Epidermotropism disproportionate to spongiosis</li>
            <li>Pautrier microabscesses (collections of lymphocytes in epidermis)</li>
            <li>Band-like infiltrate in papillary dermis</li>
            <li>Lymphocytes larger than basal keratinocyte nuclei</li>
          </ul>

          <h4 className="font-semibold mt-4">Features Favoring Spongiotic Dermatitis</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Prominent spongiosis</li>
            <li>Eosinophils (though can be seen in MF)</li>
            <li>Lymphocytes proportionate to degree of spongiosis</li>
            <li>No significant nuclear atypia</li>
          </ul>

          <h4 className="font-semibold mt-4">Helpful Ancillary Studies</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>T-cell receptor gene rearrangement (clonal in MF)</li>
            <li>Flow cytometry or IHC for CD4:CD8 ratio, loss of pan-T markers</li>
          </ul>
        </>
      ),
      keyPoints: [
        'Epidermotropism out of proportion to spongiosis suggests MF',
        'Pautrier microabscesses are classic for MF (but uncommon)',
        'When in doubt, clinical correlation and possibly rebiopsy',
      ],
      pitfalls: [
        'Early MF can be indistinguishable from chronic dermatitis',
        'Multiple biopsies over time may be needed',
        'Clinical-pathologic correlation is essential',
      ],
    },
    {
      title: 'Dysplastic Nevus vs Melanoma In Situ',
      content: (
        <>
          <p>
            This is arguably the most difficult distinction in dermatopathology, with significant
            inter-observer variability even among experts.
          </p>

          <h4 className="font-semibold mt-4">Features Favoring Melanoma In Situ</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Confluence of melanocytes along the junction</li>
            <li>Pagetoid spread (melanocytes throughout spinous/granular layers)</li>
            <li>Marked cytologic atypia</li>
            <li>Loss of maturation</li>
            <li>Consumption/thinning of epidermis</li>
            <li>Large size ({">"} 6mm clinically)</li>
            <li>Asymmetry</li>
          </ul>

          <h4 className="font-semibold mt-4">Features Favoring Dysplastic Nevus</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Focal/mild atypia</li>
            <li>Presence of maturation in dermal component</li>
            <li>Symmetry</li>
            <li>Shoulder phenomenon (common but not diagnostic)</li>
            <li>Lamellar fibroplasia</li>
          </ul>

          <h4 className="font-semibold mt-4">The Gray Zone</h4>
          <p className="mt-2">
            Some lesions fall into a diagnostically ambiguous category. Options include:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Descriptive diagnosis with comment about features</li>
            <li>Second opinion from dermpath expert</li>
            <li>Recommendation for complete excision</li>
          </ul>
        </>
      ),
      keyPoints: [
        'Confluence and pagetoid spread favor melanoma in situ',
        'Presence of maturation favors dysplastic nevus',
        'Some cases are genuinely ambiguous - seek consultation',
      ],
      pitfalls: [
        'Shoulder phenomenon occurs in both dysplastic nevi and melanoma',
        'Severely dysplastic nevi may be excised regardless of terminology',
        'Inter-observer variability is high - second opinions are reasonable',
      ],
    },
    {
      title: 'Spitz Nevus vs Melanoma',
      content: (
        <>
          <p>
            Spitz nevi can have alarming features including large cells, mitoses, and even
            pagetoid spread, making distinction from melanoma very challenging.
          </p>

          <h4 className="font-semibold mt-4">Features Favoring Spitz Nevus</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Symmetry</li>
            <li>Maturation with depth (cells become smaller)</li>
            <li>Kamino bodies (eosinophilic globules at DEJ)</li>
            <li>Younger patient (child or adolescent)</li>
            <li>Small size ({"<"} 6mm)</li>
            <li>Sharp lateral demarcation</li>
          </ul>

          <h4 className="font-semibold mt-4">Features Favoring Melanoma</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Lack of maturation or reverse maturation</li>
            <li>Asymmetry</li>
            <li>Deep mitoses</li>
            <li>Adult patient</li>
            <li>Large size</li>
            <li>Ulceration</li>
          </ul>

          <h4 className="font-semibold mt-4">Atypical Spitz Tumor (AST)</h4>
          <p className="mt-2">
            Some lesions cannot be definitively classified. These are often labeled "atypical Spitz tumor"
            with recommendation for complete excision and close follow-up.
          </p>
        </>
      ),
      keyPoints: [
        'Symmetry and maturation favor Spitz nevus',
        'Age is important - Spitz nevi are more common in children',
        'Atypical Spitz tumors: When in doubt, expert consultation',
      ],
      pitfalls: [
        'Some Spitz nevi show pagetoid spread - doesn\'t always mean melanoma',
        'Mitoses can be numerous in Spitz nevi',
        'Atypical Spitz tumors in adults are particularly challenging',
      ],
    },
    {
      title: 'Psoriasis vs Psoriasiform Drug Eruption',
      content: (
        <>
          <p>
            Drug eruptions can perfectly mimic psoriasis histologically, making clinical
            correlation essential.
          </p>

          <h4 className="font-semibold mt-4">Subtle Clues for Drug Eruption</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Eosinophils in the infiltrate</li>
            <li>Interface changes (not typical of psoriasis)</li>
            <li>More irregular acanthosis (vs regular in psoriasis)</li>
            <li>Apoptotic keratinocytes</li>
          </ul>

          <h4 className="font-semibold mt-4">Clinical Correlation</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Recent medication changes</li>
            <li>Distribution of lesions</li>
            <li>Patient's prior history of psoriasis</li>
          </ul>
        </>
      ),
      keyPoints: [
        'Psoriasiform drug eruptions can be histologically identical to psoriasis',
        'Eosinophils suggest drug reaction',
        'Clinical history is critical',
      ],
      pitfalls: [
        'Cannot reliably distinguish psoriasis from drug eruption by histology alone',
        'Beta-blockers, lithium, others can cause psoriasiform eruptions',
        'Comment in report about need for clinical correlation',
      ],
    },
    {
      title: 'Squamous Cell Carcinoma In Situ vs Lichen Simplex Chronicus',
      content: (
        <>
          <p>
            Lichen simplex chronicus (LSC) shows reactive epidermal atypia that can mimic
            squamous cell carcinoma in situ.
          </p>

          <h4 className="font-semibold mt-4">Features of LSC</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Hypergranulosis (prominent granular layer)</li>
            <li>Hyperkeratosis</li>
            <li>Irregular acanthosis</li>
            <li>Vertical orientation of collagen in papillary dermis</li>
            <li>Retained maturation (despite atypia)</li>
          </ul>

          <h4 className="font-semibold mt-4">Features of SCC In Situ</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Full-thickness atypia</li>
            <li>Loss of maturation</li>
            <li>Atypical mitoses at multiple levels</li>
            <li>Multinucleated keratinocytes</li>
            <li>Usually decreased or lost granular layer</li>
          </ul>
        </>
      ),
      keyPoints: [
        'Hypergranulosis and vertical collagen favor LSC',
        'Full-thickness atypia with lost maturation favors SCC in situ',
        'LSC has reactive atypia but preserved architecture',
      ],
      pitfalls: [
        'Reactive atypia in LSC can be alarming',
        'Some cases are genuinely difficult - err on side of caution',
        'Consider deeper sections if diagnosis uncertain',
      ],
    },
    {
      title: 'Dermatofibroma vs DFSP',
      content: (
        <>
          <p>
            While DF is benign and DFSP is locally aggressive, they can overlap histologically.
          </p>

          <h4 className="font-semibold mt-4">Key Distinguishing Features</h4>
          <table className="w-full mt-3 text-sm border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Feature</th>
                <th className="text-left p-2">Dermatofibroma</th>
                <th className="text-left p-2">DFSP</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">Epidermal hyperplasia</td>
                <td className="p-2">Present ("dirty feet")</td>
                <td className="p-2">Absent</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Subcutaneous extension</td>
                <td className="p-2">Usually dermis only</td>
                <td className="p-2">Honeycomb pattern</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">CD34</td>
                <td className="p-2">Negative</td>
                <td className="p-2">Positive</td>
              </tr>
              <tr>
                <td className="p-2">Circumscription</td>
                <td className="p-2">Poorly circumscribed</td>
                <td className="p-2">Infiltrative</td>
              </tr>
            </tbody>
          </table>
        </>
      ),
      keyPoints: [
        'CD34 is the key discriminator: DF negative, DFSP positive',
        'DFSP infiltrates subcutis in honeycomb pattern',
        'Epidermal hyperplasia favors DF',
      ],
      pitfalls: [
        'Superficial biopsies of DFSP may not show subcutaneous infiltration',
        'Cellular dermatofibroma can be alarming but is CD34 negative',
        'Use CD34 liberally when storiform pattern is present',
      ],
    },
    {
      title: 'Panniculitis vs Subcutaneous Panniculitis-like T-cell Lymphoma',
      content: (
        <>
          <p>
            Subcutaneous panniculitis-like T-cell lymphoma (SPTCL) can histologically mimic
            benign panniculitis, with life-threatening implications if missed.
          </p>

          <h4 className="font-semibold mt-4">Red Flags for SPTCL</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Atypical lymphocytes rimming adipocytes</li>
            <li>Karyorrhexis (nuclear debris)</li>
            <li>Fat necrosis</li>
            <li>Absence of neutrophils or eosinophils</li>
            <li>Cytologic atypia in lymphocytes</li>
          </ul>

          <h4 className="font-semibold mt-4">Workup for Suspected SPTCL</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>IHC: CD3, CD4, CD8, CD56, TIA-1, granzyme B</li>
            <li>T-cell receptor gene rearrangement</li>
            <li>Flow cytometry if fresh tissue available</li>
          </ul>

          <h4 className="font-semibold mt-4">Clinical Context</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Recurrent panniculitis</li>
            <li>Systemic symptoms</li>
            <li>Cytopenias</li>
            <li>Hemophagocytic syndrome</li>
          </ul>
        </>
      ),
      keyPoints: [
        'Atypical lymphocytes rimming adipocytes = red flag',
        'Low threshold for IHC/molecular studies in atypical panniculitis',
        'Clinical correlation essential',
      ],
      pitfalls: [
        'Can look deceptively bland',
        'Multiple biopsies over time may be needed',
        'High index of suspicion with recurrent or treatment-resistant panniculitis',
      ],
    },
  ]

  return (
    <LessonPage
      title="Pitfalls"
      icon="⚠️"
      description="Common diagnostic challenges and mimics in dermatopathology"
      sections={sections}
      color="bg-amber-500/10 text-amber-500"
    />
  )
}

export default PitfallsPage
