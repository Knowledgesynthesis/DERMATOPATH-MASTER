import LessonPage from '@/components/LessonPage'

const IHCPage = () => {
  const sections = [
    {
      title: 'Introduction to IHC in Dermatopathology',
      content: (
        <>
          <p>
            <strong>Immunohistochemistry (IHC)</strong> uses antibodies to detect specific antigens
            in tissue. In dermatopathology, IHC helps classify tumors, identify organisms, and
            distinguish diagnostic mimics.
          </p>

          <h4 className="font-semibold mt-4">Educational Disclaimer</h4>
          <p className="mt-2 text-sm italic">
            This module presents conceptual IHC patterns for educational purposes only.
            Interpretation requires understanding of staining patterns, controls, and clinical context.
            This is NOT laboratory methodology or diagnostic advice.
          </p>

          <h4 className="font-semibold mt-4">General Principles</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Positive vs negative (compared to appropriate controls)</li>
            <li>Pattern: nuclear, cytoplasmic, membranous, or mixed</li>
            <li>Distribution: diffuse, patchy, or focal</li>
            <li>Intensity: weak, moderate, strong</li>
          </ul>

          <h4 className="font-semibold mt-4">When to Use IHC</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Poorly differentiated neoplasms</li>
            <li>Melanocytic vs non-melanocytic distinction</li>
            <li>Epithelial vs mesenchymal tumors</li>
            <li>Lymphoproliferative disorders</li>
            <li>Diagnostic dilemmas where morphology is ambiguous</li>
          </ul>
        </>
      ),
      keyPoints: [
        'IHC helps classify tumors when morphology is ambiguous',
        'Always interpret in context of H&E findings',
        'Use panels, not single markers',
      ],
    },
    {
      title: 'Melanocytic Markers',
      content: (
        <>
          <h4 className="font-semibold">SOX10</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Staining:</strong> Nuclear</li>
            <li><strong>Use:</strong> Highly sensitive for melanocytic lesions</li>
            <li><strong>Pitfall:</strong> Also positive in nerve sheath tumors, some salivary tumors</li>
          </ul>

          <h4 className="font-semibold mt-4">S100</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Staining:</strong> Nuclear and cytoplasmic</li>
            <li><strong>Use:</strong> Very sensitive for melanocytic lesions</li>
            <li><strong>Pitfall:</strong> NOT specific (Schwann cells, Langerhans cells, adipocytes, etc.)</li>
          </ul>

          <h4 className="font-semibold mt-4">Melan-A (MART-1)</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Staining:</strong> Cytoplasmic</li>
            <li><strong>Use:</strong> More specific for melanocytic lesions</li>
            <li><strong>Pitfall:</strong> Less sensitive than SOX10/S100 (can be negative in spindle/desmoplastic melanoma)</li>
          </ul>

          <h4 className="font-semibold mt-4">HMB-45</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Staining:</strong> Cytoplasmic</li>
            <li><strong>Use:</strong> Helps assess maturation (positive superficially, negative at depth in nevi)</li>
            <li><strong>Pitfall:</strong> Can be negative in spindle cell and desmoplastic melanomas</li>
          </ul>

          <h4 className="font-semibold mt-4">Melanocytic Panel Strategy</h4>
          <p className="mt-2">
            Typical panel: <strong>SOX10 + Melan-A + HMB-45</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>SOX10: High sensitivity</li>
            <li>Melan-A: Good specificity, assesses distribution</li>
            <li>HMB-45: Assesses maturation</li>
          </ul>
        </>
      ),
      keyPoints: [
        'SOX10: Most sensitive melanocytic marker',
        'S100: Very sensitive but not specific',
        'HMB-45: Useful for assessing maturation in nevi vs melanoma',
      ],
      pitfalls: [
        'S100 alone is insufficient - too many false positives',
        'Desmoplastic melanoma: SOX10+, S100+, but Melan-A and HMB-45 often negative',
        'No single marker is perfect - use panels',
      ],
    },
    {
      title: 'Keratinocyte Markers',
      content: (
        <>
          <h4 className="font-semibold">p40</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Staining:</strong> Nuclear</li>
            <li><strong>Use:</strong> Squamous differentiation marker</li>
            <li><strong>More specific than p63</strong> (doesn't stain basal/myoepithelial cells as strongly)</li>
          </ul>

          <h4 className="font-semibold mt-4">p63</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Staining:</strong> Nuclear</li>
            <li><strong>Use:</strong> Squamous and basal/myoepithelial cells</li>
            <li><strong>Pitfall:</strong> Less specific than p40</li>
          </ul>

          <h4 className="font-semibold mt-4">CK5/6</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Staining:</strong> Cytoplasmic</li>
            <li><strong>Use:</strong> High molecular weight keratin, squamous differentiation</li>
          </ul>

          <h4 className="font-semibold mt-4">BerEP4</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Staining:</strong> Membranous</li>
            <li><strong>Use:</strong> Positive in BCC, negative in trichoepithelioma</li>
            <li><strong>Helps distinguish:</strong> BCC vs benign follicular tumors</li>
          </ul>

          <h4 className="font-semibold mt-4">CK20</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Staining:</strong> Cytoplasmic</li>
            <li><strong>Use:</strong> Merkel cell carcinoma (dot-like perinuclear pattern)</li>
          </ul>
        </>
      ),
      keyPoints: [
        'p40: Preferred squamous marker (more specific than p63)',
        'BerEP4: Positive in BCC, helps distinguish from trichoepithelioma',
        'CK20: Merkel cell carcinoma (perinuclear dot pattern)',
      ],
      pitfalls: [
        'p63 stains basal cells - can be misleading',
        'BerEP4 can be focally positive in some benign lesions',
        'Poorly differentiated SCC may lose keratin expression',
      ],
    },
    {
      title: 'Mesenchymal and Vascular Markers',
      content: (
        <>
          <h4 className="font-semibold">CD34</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Use:</strong> Vascular marker, also positive in DFSP</li>
            <li><strong>DFSP:</strong> Diffusely positive (vs dermatofibroma: negative)</li>
            <li><strong>Vascular tumors:</strong> Positive in endothelial cells</li>
          </ul>

          <h4 className="font-semibold mt-4">CD31 and ERG</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Use:</strong> Endothelial markers</li>
            <li><strong>More specific for vascular lesions than CD34</strong></li>
            <li>ERG: Nuclear, highly specific for endothelium</li>
          </ul>

          <h4 className="font-semibold mt-4">HHV-8 (LANA-1)</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Staining:</strong> Nuclear</li>
            <li><strong>Use:</strong> Kaposi sarcoma (highly specific and sensitive)</li>
          </ul>

          <h4 className="font-semibold mt-4">Desmin and Smooth Muscle Actin</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Use:</strong> Muscle differentiation (leiomyoma, leiomyosarcoma)</li>
            <li>Desmin: More specific for smooth muscle</li>
            <li>SMA: Broader, includes myofibroblasts</li>
          </ul>

          <h4 className="font-semibold mt-4">Factor XIIIa</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Use:</strong> Dermatofibroma (positive)</li>
            <li><strong>Negative in DFSP</strong></li>
          </ul>
        </>
      ),
      keyPoints: [
        'CD34: DFSP (diffuse) vs dermatofibroma (negative)',
        'ERG: Highly specific vascular marker',
        'HHV-8: Diagnostic for Kaposi sarcoma',
      ],
      pitfalls: [
        'CD34 is NOT specific for vascular - also DFSP, some other tumors',
        'SMA stains myofibroblasts - not specific for smooth muscle',
        'Use multiple markers for vascular tumors (CD31, ERG, CD34)',
      ],
    },
    {
      title: 'Lymphoid Markers',
      content: (
        <>
          <h4 className="font-semibold">CD20 and CD3</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>CD20:</strong> B-cell marker</li>
            <li><strong>CD3:</strong> T-cell marker</li>
            <li><strong>Use:</strong> Distinguish B-cell vs T-cell lymphomas</li>
          </ul>

          <h4 className="font-semibold mt-4">CD30</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Use:</strong> Lymphomatoid papulosis, anaplastic large cell lymphoma</li>
            <li><strong>Staining:</strong> Membranous and Golgi pattern</li>
          </ul>

          <h4 className="font-semibold mt-4">CD1a</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Use:</strong> Langerhans cell histiocytosis</li>
            <li><strong>Langerin (CD207):</strong> More specific for Langerhans cells</li>
          </ul>

          <h4 className="font-semibold mt-4">Myeloperoxidase (MPO)</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Use:</strong> Myeloid lineage (leukemia cutis)</li>
          </ul>
        </>
      ),
      keyPoints: [
        'CD3 vs CD20: T-cell vs B-cell lineage',
        'CD30: Lymphomatoid papulosis, anaplastic large cell lymphoma',
        'CD1a/Langerin: Langerhans cell histiocytosis',
      ],
    },
    {
      title: 'Proliferation Markers',
      content: (
        <>
          <h4 className="font-semibold">Ki-67 (MIB-1)</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Staining:</strong> Nuclear</li>
            <li><strong>Use:</strong> Assesses proliferation rate</li>
            <li><strong>Application:</strong> Lymphomas, some melanocytic lesions</li>
            <li>Higher Ki-67 suggests higher grade/more aggressive behavior</li>
          </ul>

          <h4 className="font-semibold mt-4">Use in Melanocytic Lesions</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Nevi: Low Ki-67, highest at junction, decreases with depth (matches maturation)</li>
            <li>Melanoma: Higher Ki-67 throughout, may increase with depth</li>
          </ul>
        </>
      ),
      keyPoints: [
        'Ki-67 assesses proliferation rate',
        'Useful adjunct in melanocytic lesions (maturation pattern)',
        'Higher proliferation in lymphomas indicates higher grade',
      ],
    },
  ]

  return (
    <LessonPage
      title="IHC Concepts"
      icon="🧪"
      description="Melanocytic markers, keratins, and other high-yield immunostains"
      sections={sections}
      color="bg-pink-500/10 text-pink-500"
    />
  )
}

export default IHCPage
