import LessonPage from '@/components/LessonPage'

const InflammatoryPage = () => {
  const sections = [
    {
      title: 'Spongiotic Dermatitis',
      content: (
        <>
          <p>
            <strong>Spongiosis</strong> is intercellular edema within the epidermis, creating spaces between keratinocytes.
            This is the hallmark of eczematous dermatitis.
          </p>

          <h4 className="font-semibold mt-4">Key Histologic Features</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Widening of intercellular spaces between keratinocytes</li>
            <li>Exocytosis of lymphocytes into the epidermis</li>
            <li>Variable acanthosis (epidermal thickening)</li>
            <li>Parakeratosis (retained nuclei in stratum corneum)</li>
            <li>Superficial perivascular lymphocytic infiltrate</li>
          </ul>

          <h4 className="font-semibold mt-4">Inflammatory Cell Patterns</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Lymphocyte-predominant:</strong> Atopic dermatitis, contact dermatitis, nummular dermatitis</li>
            <li><strong>Eosinophil-rich:</strong> Allergic contact dermatitis, drug eruptions, arthropod bites</li>
          </ul>

          <h4 className="font-semibold mt-4">Differential Diagnosis</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Atopic dermatitis</li>
            <li>Allergic contact dermatitis</li>
            <li>Irritant contact dermatitis</li>
            <li>Nummular dermatitis</li>
            <li>Id reaction</li>
            <li>Drug eruption (morbilliform)</li>
          </ul>
        </>
      ),
      keyPoints: [
        'Spongiosis = intercellular epidermal edema',
        'Eosinophils suggest allergic etiology or arthropod reaction',
        'Acute lesions show more spongiosis; chronic lesions show more acanthosis',
      ],
      pitfalls: [
        'Mild spongiosis can be subtle - look carefully at low-intermediate power',
        'Spongiotic dermatitis with atypical lymphocytes: consider mycosis fungoides',
        'Excessive spongiosis forming vesicles may resemble vesiculobullous disease',
      ],
    },
    {
      title: 'Psoriasiform Dermatitis',
      content: (
        <>
          <p>
            <strong>Psoriasiform</strong> refers to regular elongation of rete ridges with a characteristic appearance.
          </p>

          <h4 className="font-semibold mt-4">Key Histologic Features</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Regular, elongated rete ridges (often "test-tube" shaped)</li>
            <li>Thinning of suprapapillary plates</li>
            <li>Confluent parakeratosis</li>
            <li>Neutrophils in stratum corneum (Munro microabscesses)</li>
            <li>Dilated, tortuous capillaries in papillary dermis</li>
            <li>Hypogranulosis (decreased granular layer)</li>
          </ul>

          <h4 className="font-semibold mt-4">Differential Diagnosis</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Psoriasis:</strong> Classic findings as above, neutrophils in corneum</li>
            <li><strong>Chronic spongiotic dermatitis:</strong> Irregular acanthosis, may have spongiosis</li>
            <li><strong>Pityriasis rubra pilaris:</strong> Alternating ortho- and parakeratosis (checkerboard pattern)</li>
            <li><strong>Lichen simplex chronicus:</strong> Irregular acanthosis, hypergranulosis, vertical collagen</li>
          </ul>
        </>
      ),
      keyPoints: [
        'Regular acanthosis with elongated rete ridges is the hallmark',
        'Munro microabscesses (neutrophils in stratum corneum) support psoriasis',
        'Thinning of suprapapillary plates creates distinctive architecture',
      ],
      pitfalls: [
        'Chronic eczematous dermatitis can develop psoriasiform features',
        'Early or treated psoriasis may lack classic features',
        'Psoriasiform drug eruptions can mimic psoriasis histologically',
      ],
    },
    {
      title: 'Interface/Lichenoid Dermatitis',
      content: (
        <>
          <p>
            <strong>Interface dermatitis</strong> shows damage to the dermal-epidermal junction.
            <strong>Lichenoid</strong> is a specific subtype with band-like lymphocytic infiltrate.
          </p>

          <h4 className="font-semibold mt-4">Key Histologic Features</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Vacuolar alteration or liquefactive degeneration of basal layer</li>
            <li>Apoptotic keratinocytes (Civatte bodies, colloid bodies)</li>
            <li>Band-like lymphocytic infiltrate obscuring the dermal-epidermal junction</li>
            <li>Pigment incontinence (melanin in dermis)</li>
            <li>Sawtooth rete ridges (irregular, pointed)</li>
            <li>Hypergranulosis</li>
          </ul>

          <h4 className="font-semibold mt-4">Differential Diagnosis</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Lichen planus:</strong> Classic lichenoid pattern, hypergranulosis, sawtooth rete</li>
            <li><strong>Lupus erythematosus:</strong> Vacuolar interface, dermal mucin, deep perivascular infiltrate</li>
            <li><strong>Drug eruption (lichenoid):</strong> May have eosinophils, less organized band</li>
            <li><strong>Erythema multiforme:</strong> Prominent vacuolar change, necrotic keratinocytes</li>
            <li><strong>Fixed drug eruption:</strong> Interface change with eosinophils and melanophages</li>
          </ul>
        </>
      ),
      keyPoints: [
        'Interface = damage at the dermal-epidermal junction',
        'Lichenoid = band-like lymphocytic infiltrate hugging the junction',
        'Civatte bodies are apoptotic keratinocytes at the junction',
      ],
      pitfalls: [
        'Lupus vs lichen planus: Look for dermal mucin and deep inflammation in lupus',
        'Drug-induced lichenoid reactions can be histologically identical to lichen planus',
        'Lichen planus-like keratosis can mimic lichen planus but occurs on sun-damaged skin',
      ],
    },
    {
      title: 'Vesiculobullous Diseases',
      content: (
        <>
          <p>
            The key to vesiculobullous diseases is determining the <strong>level of split</strong>:
            intraepidermal vs subepidermal.
          </p>

          <h4 className="font-semibold mt-4">Intraepidermal Blisters</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Subcorneal:</strong> Impetigo (neutrophils), pemphigus foliaceus</li>
            <li><strong>Suprabasal:</strong> Pemphigus vulgaris (acantholysis, "tombstone" basal cells)</li>
            <li><strong>Spongiotic:</strong> Acute eczematous dermatitis, allergic contact dermatitis</li>
          </ul>

          <h4 className="font-semibold mt-4">Subepidermal Blisters</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Bullous pemphigoid:</strong> Eosinophil-rich, subepidermal split</li>
            <li><strong>Dermatitis herpetiformis:</strong> Neutrophils in papillary dermis, fibrin</li>
            <li><strong>Linear IgA disease:</strong> Similar to DH, requires DIF</li>
            <li><strong>Epidermolysis bullosa acquisita:</strong> Pauci-inflammatory, requires DIF</li>
            <li><strong>Bullous lupus:</strong> Neutrophil-rich, requires DIF</li>
          </ul>

          <h4 className="font-semibold mt-4">Acantholysis vs Spongiosis</h4>
          <p className="mt-2">
            <strong>Acantholysis:</strong> Loss of intercellular attachments, rounded keratinocytes<br />
            <strong>Spongiosis:</strong> Intercellular edema, preserved intercellular bridges
          </p>
        </>
      ),
      keyPoints: [
        'First determine: intraepidermal vs subepidermal split',
        'Then assess inflammatory cells: neutrophils, eosinophils, lymphocytes, or pauci-inflammatory',
        'DIF is often essential for definitive diagnosis',
      ],
      pitfalls: [
        'Artifactual separation can mimic true blister formation',
        'Re-epithelialization of subepidermal blisters can mimic intraepidermal split',
        'Some cases require immunofluorescence for definitive diagnosis',
      ],
    },
    {
      title: 'Granulomatous Dermatitis',
      content: (
        <>
          <p>
            Granulomas are organized collections of epithelioid histiocytes. Pattern recognition helps narrow
            the differential.
          </p>

          <h4 className="font-semibold mt-4">Types of Granulomas</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Sarcoidal (naked):</strong> Well-formed, minimal lymphocytes at periphery</li>
            <li><strong>Tuberculoid:</strong> Caseating necrosis, lymphocytic cuff</li>
            <li><strong>Suppurative:</strong> Central neutrophils, surrounding histiocytes</li>
            <li><strong>Palisaded:</strong> Histiocytes palisading around altered collagen/necrosis</li>
          </ul>

          <h4 className="font-semibold mt-4">Differential by Pattern</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Sarcoidal:</strong> Sarcoidosis, foreign body, berylliosis, Crohn disease</li>
            <li><strong>Tuberculoid:</strong> Mycobacterial infections (TB, atypical), deep fungi</li>
            <li><strong>Suppurative:</strong> Deep fungal infections, atypical mycobacteria, ruptured cyst</li>
            <li><strong>Palisaded:</strong> Granuloma annulare, necrobiosis lipoidica, rheumatoid nodule</li>
          </ul>
        </>
      ),
      keyPoints: [
        'Pattern of granuloma helps narrow differential significantly',
        'Always order PAS/GMS and AFB stains when granulomas are present',
        'Polarization helps identify foreign material',
      ],
      pitfalls: [
        'Not all granulomatous inflammation is infectious',
        'Some foreign body reactions can mimic sarcoidal granulomas',
        'Stains may be negative even in true infections (sample, timing)',
      ],
    },
    {
      title: 'Panniculitis',
      content: (
        <>
          <p>
            The key to panniculitis is determining whether inflammation is predominantly
            <strong> septal</strong> or <strong>lobular</strong>.
          </p>

          <h4 className="font-semibold mt-4">Septal Panniculitis</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Erythema nodosum:</strong> Septal inflammation with Miescher's radial granulomas</li>
            <li><strong>Morphea/Scleroderma:</strong> Septal fibrosis, thickened collagen bundles</li>
          </ul>

          <h4 className="font-semibold mt-4">Lobular Panniculitis</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Lupus panniculitis:</strong> Lymphocytic lobular panniculitis, hyaline fat necrosis</li>
            <li><strong>Pancreatic panniculitis:</strong> Fat necrosis with ghost cells</li>
            <li><strong>Alpha-1 antitrypsin deficiency:</strong> Neutrophilic lobular panniculitis</li>
            <li><strong>Subcutaneous panniculitis-like T-cell lymphoma:</strong> Atypical lymphocytes rimming adipocytes</li>
          </ul>

          <h4 className="font-semibold mt-4">Mixed Septal and Lobular</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Cold panniculitis</li>
            <li>Traumatic panniculitis</li>
            <li>Post-injection panniculitis</li>
          </ul>
        </>
      ),
      keyPoints: [
        'Septal vs lobular is the first branching point',
        'Adequate biopsy depth to subcutis is essential for diagnosis',
        'Assess inflammatory cell type: lymphocytes, neutrophils, histiocytes',
      ],
      pitfalls: [
        'Superficial biopsies may miss panniculitis entirely',
        'Subcutaneous lymphoma can mimic benign panniculitis - consider IHC/flow',
        'Clinical correlation is essential as many patterns overlap histologically',
      ],
    },
  ]

  return (
    <LessonPage
      title="Inflammatory Patterns"
      icon="🔥"
      description="Spongiotic, psoriasiform, lichenoid, vesiculobullous, granulomatous, and panniculitis patterns"
      sections={sections}
      color="bg-red-500/10 text-red-500"
    />
  )
}

export default InflammatoryPage
