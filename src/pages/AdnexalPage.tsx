import LessonPage from '@/components/LessonPage'

const AdnexalPage = () => {
  const sections = [
    {
      title: 'Approach to Adnexal Tumors',
      content: (
        <>
          <p>
            Adnexal tumors differentiate toward hair follicles, sebaceous glands, eccrine glands,
            or apocrine glands. Pattern recognition helps narrow the diagnosis.
          </p>

          <h4 className="font-semibold mt-4">General Framework</h4>
          <ol className="list-decimal list-inside space-y-2 mt-2">
            <li>Identify the tumor as adnexal (not melanocytic, keratinocytic, or other)</li>
            <li>Determine line of differentiation: follicular, sebaceous, eccrine, or apocrine</li>
            <li>Assess for benign vs malignant features</li>
            <li>Use specific architectural clues for diagnosis</li>
          </ol>

          <h4 className="font-semibold mt-4">Benign vs Malignant Clues</h4>
          <p className="mt-2"><strong>Benign features:</strong></p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Symmetric, well-circumscribed</li>
            <li>Bland cytology</li>
            <li>Minimal mitoses</li>
          </ul>

          <p className="mt-3"><strong>Malignant features:</strong></p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Asymmetric, infiltrative growth</li>
            <li>Cytologic atypia</li>
            <li>Increased mitoses, necrosis</li>
            <li>Perineural invasion</li>
          </ul>
        </>
      ),
      keyPoints: [
        'Adnexal tumors are often diagnosed by pattern recognition',
        'Many are benign and require conservative management',
        'IHC can help in difficult cases',
      ],
    },
    {
      title: 'Follicular Tumors',
      content: (
        <>
          <h4 className="font-semibold">Trichoepithelioma</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Nests of basaloid cells resembling BCC</li>
            <li>Papillary mesenchymal bodies (keratin-containing clefts)</li>
            <li>Horn cysts (small keratin cysts)</li>
            <li>Minimal retraction artifact (vs BCC)</li>
            <li>Benign, may be multiple in familial syndromes</li>
          </ul>

          <h4 className="font-semibold mt-4">Pilomatricoma</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Shadow cells:</strong> Anucleate cells with preserved cell outlines (pathognomonic)</li>
            <li>Basaloid cells transitioning to shadow cells</li>
            <li>Calcification common</li>
            <li>Foreign body giant cell reaction</li>
          </ul>

          <h4 className="font-semibold mt-4">Trichofolliculoma</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Central dilated follicle with radiating small hair follicles</li>
            <li>Contains all normal follicular structures</li>
            <li>Benign hamartoma</li>
          </ul>

          <h4 className="font-semibold mt-4">Trichoblastoma</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Similar to BCC but with follicular differentiation</li>
            <li>Papillary mesenchymal bodies</li>
            <li>Rarely malignant potential</li>
          </ul>
        </>
      ),
      keyPoints: [
        'Shadow cells = pilomatricoma',
        'Papillary mesenchymal bodies suggest follicular differentiation',
        'Trichoepithelioma vs BCC: Challenging, use papillary mesenchymal bodies as clue',
      ],
      pitfalls: [
        'Trichoepithelioma can be very difficult to distinguish from BCC',
        'Multiple trichoepitheliomas: Consider genetic syndromes',
        'Malignant pilomatricoma exists but is rare',
      ],
    },
    {
      title: 'Sebaceous Tumors',
      content: (
        <>
          <h4 className="font-semibold">Sebaceous Hyperplasia</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Enlarged but architecturally normal sebaceous lobules</li>
            <li>Attached to follicle</li>
            <li>Common in older adults on face</li>
          </ul>

          <h4 className="font-semibold mt-4">Sebaceous Adenoma</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Well-circumscribed proliferation of sebaceous lobules</li>
            <li>Mixture of mature sebocytes and basaloid germinative cells</li>
            <li>Benign but consider Muir-Torre syndrome if multiple</li>
          </ul>

          <h4 className="font-semibold mt-4">Sebaceous Carcinoma</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Infiltrative growth of atypical sebaceous cells</li>
            <li>Pagetoid spread in eyelid (intraepithelial spread)</li>
            <li>Commonly periocular</li>
            <li>Can be aggressive with nodal metastasis</li>
            <li>High recurrence rate</li>
          </ul>

          <h4 className="font-semibold mt-4">Muir-Torre Syndrome</h4>
          <p className="mt-2">
            Multiple sebaceous neoplasms + visceral malignancies (colorectal, genitourinary).
            Consider MMR protein IHC if suspicious.
          </p>
        </>
      ),
      keyPoints: [
        'Sebaceous differentiation = cells with bubbly/foamy cytoplasm',
        'Multiple sebaceous tumors: Think Muir-Torre syndrome',
        'Sebaceous carcinoma: Often periocular, can be aggressive',
      ],
      pitfalls: [
        'Sebaceous carcinoma can mimic BCC or SCC',
        'Pagetoid spread in eyelid lesions should prompt consideration of sebaceous carcinoma',
        'Don\'t forget to consider genetic syndromes in young patients with sebaceous tumors',
      ],
    },
    {
      title: 'Eccrine and Apocrine Tumors',
      content: (
        <>
          <h4 className="font-semibold">Poroma (Eccrine/Apocrine)</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Connection to overlying epidermis</li>
            <li>Monomorphous cuboidal cells</li>
            <li>Ductlike structures</li>
            <li>Benign, but malignant transformation possible (porocarcinoma)</li>
          </ul>

          <h4 className="font-semibold mt-4">Syringoma (Eccrine)</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Small ducts in superficial dermis</li>
            <li>"Tadpole" or "comma" shapes</li>
            <li>Often multiple, periorbital in young women</li>
            <li>Benign</li>
          </ul>

          <h4 className="font-semibold mt-4">Hidradenoma (Eccrine/Apocrine)</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Well-circumscribed nodular tumor in dermis</li>
            <li>Mixture of solid and cystic areas</li>
            <li>Ductal differentiation</li>
            <li>Benign</li>
          </ul>

          <h4 className="font-semibold mt-4">Hidrocystoma (Apocrine/Eccrine)</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Cystic structure lined by secretory epithelium</li>
            <li>Apocrine: decapitation secretion</li>
            <li>Eccrine: flatter lining</li>
          </ul>

          <h4 className="font-semibold mt-4">Microcystic Adnexal Carcinoma</h4>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Deceptively bland-appearing infiltrative tumor</li>
            <li>Keratin cysts and ductal structures</li>
            <li>Deep invasion common (into subcutis, muscle)</li>
            <li>Perineural invasion</li>
            <li>Low mitotic rate despite malignancy</li>
          </ul>
        </>
      ),
      keyPoints: [
        'Syringoma: "tadpole" ducts in superficial dermis',
        'Poroma: connection to epidermis is typical',
        'Microcystic adnexal carcinoma: Bland but infiltrative with perineural invasion',
      ],
      pitfalls: [
        'Microcystic adnexal carcinoma can be mistaken for benign due to bland cytology',
        'Perineural invasion is a critical clue for malignancy',
        'Some eccrine/apocrine tumors are difficult to classify precisely',
      ],
    },
  ]

  return (
    <LessonPage
      title="Adnexal Tumors"
      icon="💧"
      description="Sebaceous, sweat gland, and follicular tumors (high-yield frameworks)"
      sections={sections}
      color="bg-cyan-500/10 text-cyan-500"
    />
  )
}

export default AdnexalPage
