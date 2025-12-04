import LessonPage from '@/components/LessonPage'

const DIFPage = () => {
  const sections = [
    {
      title: 'Introduction to Direct Immunofluorescence (DIF)',
      content: (
        <>
          <p>
            <strong>Direct immunofluorescence (DIF)</strong> detects in vivo deposition of
            immunoglobulins and complement in tissue. It's essential for diagnosing
            autoimmune blistering diseases and lupus.
          </p>

          <h4 className="font-semibold mt-4">Educational Disclaimer</h4>
          <p className="mt-2 text-sm italic">
            This module presents conceptual DIF patterns for educational purposes only.
            Actual DIF interpretation requires specialized training and should be correlated
            with clinical and histopathologic findings. This is NOT for diagnostic use.
          </p>

          <h4 className="font-semibold mt-4">Basic Principles</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Fluorescein-labeled antibodies detect IgG, IgA, IgM, C3, fibrin</li>
            <li>Perilesional skin is preferred for pemphigus; lesional for BP</li>
            <li>Pattern and location are critical for interpretation</li>
            <li>Intensity doesn't always correlate with disease activity</li>
          </ul>

          <h4 className="font-semibold mt-4">What to Report</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Location: intercellular, basement membrane zone, vessel walls, dermal granular</li>
            <li>Pattern: linear, granular, homogeneous</li>
            <li>Reagent: IgG, IgA, IgM, C3, fibrin</li>
            <li>Intensity: 0-4+ scale</li>
          </ul>
        </>
      ),
      keyPoints: [
        'DIF is essential for diagnosing autoimmune blistering diseases',
        'Pattern + location determines interpretation',
        'Always correlate with H&E and clinical findings',
      ],
    },
    {
      title: 'Pemphigus Patterns',
      content: (
        <>
          <h4 className="font-semibold">Pemphigus Vulgaris</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Pattern:</strong> Intercellular IgG and C3 (chicken wire/fishnet pattern)</li>
            <li><strong>Location:</strong> Throughout epidermis</li>
            <li><strong>H&E correlation:</strong> Suprabasal acantholysis, tombstone basal cells</li>
          </ul>

          <h4 className="font-semibold mt-4">Pemphigus Foliaceus</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Pattern:</strong> Intercellular IgG and C3</li>
            <li><strong>Location:</strong> Superficial epidermis (granular layer)</li>
            <li><strong>H&E correlation:</strong> Subcorneal acantholysis</li>
          </ul>

          <h4 className="font-semibold mt-4">Paraneoplastic Pemphigus</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Pattern:</strong> Intercellular + basement membrane zone</li>
            <li><strong>Location:</strong> Epidermis and BMZ</li>
            <li><strong>Clinical context:</strong> Underlying neoplasm (lymphoma, Castleman)</li>
          </ul>
        </>
      ),
      keyPoints: [
        'Intercellular (fishnet) pattern = pemphigus group',
        'PV: suprabasal; PF: subcorneal',
        'Paraneoplastic: intercellular + BMZ',
      ],
      pitfalls: [
        'Weak or negative DIF doesn\'t exclude pemphigus',
        'Serologic testing (indirect IF, ELISA) often helpful',
        'Must sample perilesional skin for best sensitivity',
      ],
    },
    {
      title: 'Bullous Pemphigoid and Subepidermal Blistering Diseases',
      content: (
        <>
          <h4 className="font-semibold">Bullous Pemphigoid (BP)</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Pattern:</strong> Linear IgG and C3 along basement membrane zone</li>
            <li><strong>Location:</strong> BMZ (n-serrated on salt-split: epidermal side)</li>
            <li><strong>H&E correlation:</strong> Subepidermal blister with eosinophils</li>
          </ul>

          <h4 className="font-semibold mt-4">Mucous Membrane Pemphigoid (MMP)</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Pattern:</strong> Linear IgG, IgA, or C3 at BMZ</li>
            <li><strong>Location:</strong> BMZ</li>
            <li><strong>Clinical:</strong> Mucosal predominance, scarring</li>
          </ul>

          <h4 className="font-semibold mt-4">Epidermolysis Bullosa Acquisita (EBA)</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Pattern:</strong> Linear IgG and C3 at BMZ</li>
            <li><strong>Location:</strong> BMZ (salt-split: dermal side - floor)</li>
            <li><strong>H&E:</strong> Pauci-inflammatory or neutrophil-rich subepidermal blister</li>
          </ul>

          <h4 className="font-semibold mt-4">Linear IgA Disease</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Pattern:</strong> Linear <strong>IgA</strong> at BMZ</li>
            <li><strong>Location:</strong> BMZ</li>
            <li><strong>H&E:</strong> Subepidermal blister, often neutrophil-rich</li>
          </ul>
        </>
      ),
      keyPoints: [
        'Linear BMZ pattern = subepidermal blistering disease',
        'IgG: BP, MMP, EBA - need salt-split or serology to distinguish',
        'IgA at BMZ: Linear IgA disease',
      ],
      pitfalls: [
        'BP vs EBA: Both show linear IgG at BMZ - use salt-split or serologic testing',
        'Linear IgA can be drug-induced (vancomycin, others)',
        'Negative DIF doesn\'t exclude diagnosis if clinical suspicion high',
      ],
    },
    {
      title: 'Dermatitis Herpetiformis',
      content: (
        <>
          <h4 className="font-semibold">Dermatitis Herpetiformis (DH)</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Pattern:</strong> Granular IgA in dermal papillae</li>
            <li><strong>Location:</strong> Papillary dermis (tips of dermal papillae)</li>
            <li><strong>H&E:</strong> Neutrophils in papillary dermis, fibrin, subepidermal vesicles</li>
            <li><strong>Clinical:</strong> Associated with celiac disease (gluten sensitivity)</li>
          </ul>

          <h4 className="font-semibold mt-4">Key Distinguishing Features</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>GRANULAR (not linear) pattern</li>
            <li>IgA (not IgG)</li>
            <li>PAPILLARY tips (not basement membrane zone)</li>
          </ul>
        </>
      ),
      keyPoints: [
        'Granular IgA at papillary tips = DH',
        'Associated with gluten-sensitive enteropathy',
        'Neutrophils in papillary dermis on H&E',
      ],
      pitfalls: [
        'Sample perilesional skin for best results',
        'Linear IgA disease is different (linear at BMZ)',
        'Serologic anti-tissue transglutaminase supports DH diagnosis',
      ],
    },
    {
      title: 'Lupus Erythematosus Patterns',
      content: (
        <>
          <h4 className="font-semibold">Lupus Band Test</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Pattern:</strong> Granular or homogeneous deposits at BMZ</li>
            <li><strong>Reagents:</strong> IgG, IgM, IgA, C3 (one or more)</li>
            <li><strong>Location:</strong> Basement membrane zone</li>
          </ul>

          <h4 className="font-semibold mt-4">Interpretation</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Lesional skin:</strong> Positive in both cutaneous and systemic LE</li>
            <li><strong>Sun-protected non-lesional skin:</strong> Positive more specific for SLE</li>
            <li><strong>Sun-exposed skin:</strong> Can be positive in normal individuals (false positive)</li>
          </ul>

          <h4 className="font-semibold mt-4">Histology Correlation</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Vacuolar interface dermatitis</li>
            <li>Dermal mucin</li>
            <li>Perivascular and periadnexal lymphocytic infiltrate</li>
            <li>Thickened basement membrane (PAS)</li>
          </ul>
        </>
      ),
      keyPoints: [
        'Granular deposits at BMZ = lupus band',
        'Multiple immunoreactants common (IgG, IgM, C3)',
        'Non-lesional sun-protected skin more specific for SLE',
      ],
      pitfalls: [
        'Positive lupus band in sun-exposed skin may be false positive',
        'DIF alone cannot distinguish cutaneous LE from SLE',
        'Must correlate with serology and clinical findings',
      ],
    },
    {
      title: 'Vasculitis Patterns',
      content: (
        <>
          <h4 className="font-semibold">Leukocytoclastic Vasculitis</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Pattern:</strong> IgA, IgM, IgG, C3, or fibrin in vessel walls</li>
            <li><strong>Location:</strong> Small dermal vessels</li>
            <li><strong>H&E:</strong> Neutrophilic infiltrate, leukocytoclasis, fibrinoid necrosis</li>
          </ul>

          <h4 className="font-semibold mt-4">IgA Vasculitis (Henoch-Schönlein Purpura)</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Pattern:</strong> IgA deposition in vessel walls</li>
            <li><strong>Clinical:</strong> Children, palpable purpura, abdominal pain, arthritis</li>
          </ul>
        </>
      ),
      keyPoints: [
        'Vessel wall deposits support vasculitis diagnosis',
        'IgA vasculitis: IgA in vessel walls',
        'DIF sensitivity for vasculitis is moderate - H&E often sufficient',
      ],
    },
  ]

  return (
    <LessonPage
      title="Direct Immunofluorescence (DIF)"
      icon="✨"
      description="Conceptual DIF patterns for educational purposes only"
      sections={sections}
      color="bg-yellow-500/10 text-yellow-500"
    />
  )
}

export default DIFPage
