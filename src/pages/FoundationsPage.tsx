import LessonPage from '@/components/LessonPage'

const FoundationsPage = () => {
  const sections = [
    {
      title: 'Orientation to the Skin Biopsy',
      content: (
        <>
          <p>
            The skin is organized into three main layers, each with distinct architectural features
            that guide pattern recognition in dermatopathology.
          </p>
          <h4 className="font-semibold mt-4">The Three-Layer Approach</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Epidermis:</strong> The outermost layer, composed of keratinocytes arranged in stratified squamous epithelium</li>
            <li><strong>Dermis:</strong> The middle layer containing collagen, elastic fibers, vessels, and adnexal structures</li>
            <li><strong>Subcutis:</strong> The deepest layer composed of adipose tissue organized into lobules separated by fibrous septa</li>
          </ul>
        </>
      ),
      keyPoints: [
        'Always scan low power first to identify the primary pattern',
        'Assess epidermal, dermal, and subcutaneous compartments systematically',
        'Note the distribution: superficial vs deep, perivascular vs interstitial',
      ],
    },
    {
      title: 'Normal Skin Histology',
      content: (
        <>
          <h4 className="font-semibold">Epidermal Layers (Superficial to Deep)</h4>
          <ol className="list-decimal list-inside space-y-2 mt-2">
            <li><strong>Stratum corneum:</strong> Anucleate keratin layer (basket-weave pattern in normal skin)</li>
            <li><strong>Stratum granulosum:</strong> Granular layer with keratohyalin granules</li>
            <li><strong>Stratum spinosum:</strong> Spinous layer with intercellular bridges</li>
            <li><strong>Stratum basalis:</strong> Basal layer where melanocytes reside at the dermal-epidermal junction</li>
          </ol>

          <h4 className="font-semibold mt-4">Dermal Components</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Papillary dermis:</strong> Superficial, more cellular, with smaller collagen bundles</li>
            <li><strong>Reticular dermis:</strong> Deep, with thick collagen bundles oriented parallel to skin surface</li>
            <li><strong>Adnexal structures:</strong> Hair follicles, sebaceous glands, eccrine glands, apocrine glands</li>
          </ul>
        </>
      ),
      keyPoints: [
        'Normal epidermis shows orderly maturation from basal to granular layers',
        'Melanocytes are normally limited to the basal layer',
        'Adnexal structures have characteristic anatomic locations',
      ],
    },
    {
      title: 'The Dermatopathology Algorithm',
      content: (
        <>
          <p>
            A systematic approach to skin biopsies follows this pattern-based framework:
          </p>
          <ol className="list-decimal list-inside space-y-3 mt-4">
            <li><strong>Scan at low power</strong> - Identify the primary architectural pattern</li>
            <li><strong>Assess the epidermis</strong> - Look for spongiosis, acanthosis, atrophy, interface changes</li>
            <li><strong>Evaluate the dermal infiltrate</strong> - Note depth, density, and distribution</li>
            <li><strong>Identify cell types</strong> - Lymphocytes, neutrophils, eosinophils, plasma cells, histiocytes</li>
            <li><strong>Look for special features</strong> - Granulomas, vasculitis, specific architectural clues</li>
            <li><strong>Consider ancillary studies</strong> - When IHC or DIF might help (conceptually)</li>
            <li><strong>Integrate findings</strong> - Build a differential diagnosis by pattern family</li>
          </ol>
        </>
      ),
      keyPoints: [
        'Pattern recognition at low power is the foundation of dermatopathology',
        'Always correlate with clinical information when available',
        'Think in terms of differential diagnoses, not single entities',
      ],
      pitfalls: [
        'Diving to high power before assessing the overall pattern',
        'Focusing only on epidermal changes while missing dermal pathology',
        'Overlooking the depth and distribution of inflammatory infiltrates',
      ],
    },
    {
      title: 'Special Stains in Dermatopathology',
      content: (
        <>
          <p>
            Special stains help identify organisms and highlight specific tissue components.
            These are conceptual frameworks for educational purposes.
          </p>

          <h4 className="font-semibold mt-4">Common Special Stains</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>PAS (Periodic Acid-Schiff):</strong> Highlights fungi and basement membranes</li>
            <li><strong>GMS (Grocott Methenamine Silver):</strong> More sensitive for fungal organisms</li>
            <li><strong>AFB (Acid-Fast Bacilli):</strong> Detects mycobacteria</li>
            <li><strong>Fite stain:</strong> Modified AFB for lepra bacilli</li>
            <li><strong>Gram stain:</strong> Identifies bacteria</li>
            <li><strong>Fontana-Masson:</strong> Highlights melanin</li>
            <li><strong>Elastic stains:</strong> Assess elastic tissue (Verhoeff-Van Gieson)</li>
          </ul>
        </>
      ),
      keyPoints: [
        'Special stains are ordered based on clinical suspicion and histologic pattern',
        'PAS and GMS are commonly used for suspected fungal infections',
        'Consider AFB stains in granulomatous dermatitis',
      ],
    },
    {
      title: 'Approaching Your First Dermpath Case',
      content: (
        <>
          <p>
            When you receive your first dermatopathology case at the microscope:
          </p>
          <ol className="list-decimal list-inside space-y-3 mt-4">
            <li><strong>Review the clinical information</strong> - Note site, age, clinical impression</li>
            <li><strong>Start at 4x or 10x</strong> - See the entire biopsy architecture</li>
            <li><strong>Ask: "What is the primary pattern?"</strong> - This is your anchor point</li>
            <li><strong>Work through each compartment</strong> - Epidermis, dermis, subcutis</li>
            <li><strong>Note special features</strong> - Anything that stands out or seems unusual</li>
            <li><strong>Formulate a differential</strong> - List possibilities within the pattern family</li>
            <li><strong>Narrow the differential</strong> - Use specific clues to prioritize diagnoses</li>
            <li><strong>Present systematically</strong> - Pattern → features → differential → impression</li>
          </ol>
        </>
      ),
      keyPoints: [
        'Every dermpath diagnosis starts with pattern recognition',
        'Clinical correlation is essential but pathologic pattern drives the differential',
        'Systematic approach prevents missing key features',
      ],
      pitfalls: [
        'Anchoring too heavily on clinical impression without assessing histology independently',
        'Making a specific diagnosis when a descriptive pattern-based diagnosis is more appropriate',
        'Failing to raise key differential diagnoses in your report',
      ],
    },
  ]

  return (
    <LessonPage
      title="Foundations"
      icon="🔬"
      description="Orientation to skin biopsy, normal histology, and basic dermpath approach"
      sections={sections}
      color="bg-blue-500/10 text-blue-500"
    />
  )
}

export default FoundationsPage
