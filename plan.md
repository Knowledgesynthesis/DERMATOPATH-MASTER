# **DERMATOPATH MASTER — OPTIMIZED MASTER PROMPT FOR EDUCATIONAL APP GENERATION**

A **mobile-first**, **dark-mode**, **offline-ready**, pathology-resident–level educational platform dedicated to **Dermatopathology**, as learned during a **dermpath rotation** or via standard dermatopathology texts (e.g., Weedon, Elston, Lever — conceptual only).  

This app must teach:
- How to approach a skin biopsy  
- Pattern-based dermatopathology (the core of residency learning)  
- Epidermal, dermal, and subcutaneous architectural patterns  
- Inflammatory dermatoses (eczematous → lichenoid → psoriasiform → vesiculobullous → granulomatous → panniculitis)  
- Benign vs malignant melanocytic lesions  
- Keratinocytic neoplasms (AK/SCC/BCC)  
- Adnexal tumors (high-yield frameworks)  
- Immunofluorescence conceptual interpretation  
- Special stains & IHC (high-level, conceptual)  
- Pitfalls (e.g., spongiotic dermatitis vs MF; dysplastic nevus vs melanoma mimics)  

All content must be **synthetic**, **non-identifiable**, **educational only**, with **schematic diagrammatic icons** (no photomicrographs).  
Quizzes must be **session-only**, with **no progress tracking**.

---

# **MASTER PROMPT — Dermatopath Master Educational App Generator (SPECIALIZED VERSION)**

## **0. ROLE & MISSION**

You are a combined expert team:
- Product Manager  
- Senior Frontend Engineer  
- Instructional Designer  
- Dermatopathology SME  
- IHC & DIF SME  
- UX Writer  
- QA Specialist  

**Mission:**  
Produce a complete dermatopathology learning ecosystem that makes pattern-based diagnosis intuitive for pathology residents. The app must convert “derm looks overwhelming” into “I follow the algorithm.”

---

# **1. INPUTS (TO FILL WHEN USING PROMPT)**

- **PRIMARY TOPICS:** {{TOPICS}}  
  Default: inflammatory patterns, melanocytic lesions, keratinocytic lesions, adnexal lesions, DIF, soft tissue mimics.

- **LEVELS:** {{LEVELS}}  
  Default: Pathology residents PGY1–PGY4, dermatopath fellows.

- **CONTEXT:** {{CONTEXT}}  
  Default: Dermatopathology rotation, signout, boards prep.

- **LEARNING OBJECTIVES:** {{LEARNING_OBJECTIVES}}  
  Examples:  
  - Use pattern-based dermpath algorithms.  
  - Interpret inflammatory categories.  
  - Distinguish benign vs malignant melanocytic proliferations.  
  - Identify key mimics & pitfalls.  
  - Understand conceptual DIF patterns.  
  - Produce synthetic dermpath reports.

- **CONSTRAINTS:** {{CONSTRAINTS}}  
  Must include:  
  - Mobile-first  
  - Dark-mode-first  
  - Offline-ready  
  - Icons only (no real slides)  
  - No PHI  
  - No user tracking or data persistence  

- **REFERENCES:** {{REFERENCES}}  
  Optional conceptual alignment with WHO and AFIP fascicles.

- **VOICE:** {{VOICE_TONE}}  
  Default: Calm, structured, algorithmic.

---

# **2. EXECUTIVE SUMMARY & NAME OPTIONS**

**Goal:**  
Teach dermatopathology using **pattern → clues → differential → integration** workflows, exactly as a resident learns it.

**Name Options:**  
- **Dermatopath Master**  
- **SkinDx Atlas**  
- **PatternPath: Derm Edition**  

**Success Criteria:**  
- Resident can classify any derm biopsy into a major pattern.  
- Learner can differentiate melanoma vs benign nevus using conceptual clues.  
- User understands DIF basics.  
- Trainee can produce a synthetic report.

---

# **3. PERSONAS & USE CASES**

### PERSONAS
**PGY-1 Resident:**  
- Needs: “What pattern is this?”  
- Pain: Feels overwhelmed by variety.

**PGY-3 Resident:**  
- Needs: Pattern → differential integration.  
- Pain: Borderline atypia vs melanoma in situ.

**Dermpath Fellow:**  
- Needs: High-level frameworks, adnexal tumors, rare patterns.  
- Pain: Subtle mimics.

### USE CASES
- “What is the primary pattern?”  
- “Is this spongiotic or psoriasiform?”  
- “Is this a benign nevus or melanoma clue set?”  
- “What is the DIF pattern conceptually?”  
- “What adnexal tumor family fits this morphologic icon set?”  

---

# **4. CURRICULUM MAP & KNOWLEDGE GRAPH**

## MODULE A — Foundations
- Orientation to the skin biopsy  
- Epidermal → dermal → subcutis hierarchy  
- Normal skin cartoon histology  
- Special stains (conceptual: PAS, GMS, AFB)  
- General dermpath approach algorithm

---

## MODULE B — Pattern-Based Inflammatory Dermatoses
### 1. **Spongiotic dermatitis**
- Spongiosis icons  
- Eosinophils vs lymphocytes  
- Differential: eczema, drug, ID reaction  

### 2. **Psoriasiform dermatitis**
- Regular acanthosis  
- Neutrophils in stratum corneum (Munro microabscess icon)  
- Differential: psoriasis, chronic eczematous dermatitis, pityriasis rubra pilaris  

### 3. **Interface / Lichenoid dermatitis**
- Basal vacuolization  
- Band-like lymphocytes  
- Differential: lichen planus, lupus, drug  

### 4. **Vesiculobullous**
- Intraepidermal vs subepidermal split  
- Acantholysis vs spongiosis vs basement membrane split  
- Differential: pemphigus, bullous pemphigoid, DH, linear IgA  

### 5. **Granulomatous**
- Palisaded vs sarcoidal vs necrotizing cartoon types  

### 6. **Panniculitis**
- Septal vs lobular  
- Differential: erythema nodosum vs lupus panniculitis vs panniculitis-like T-cell lymphoma  

---

## MODULE C — Melanocytic Lesions
- Normal melanocyte distribution  
- Junctional, compound, dermal nevi  
- Dysplastic nevus (architectural disorder conceptual)  
- Blue nevus  
- Spitz (spindled/epithelioid cartoon; emphasize mimics)  
- Melanoma in situ  
- Invasive melanoma:
  - Asymmetry  
  - Lack of maturation  
  - Mitotic figures (icons)  
  - Pagetoid spread cartoon  
- High-yield molecular concepts (BRAF, NRAS, HRAS — no clinical advice)

---

## MODULE D — Keratinocytic Lesions
- Actinic keratosis  
- Squamous cell carcinoma (in situ → invasive)  
- Basal cell carcinoma  
  - Peripheral palisading cartoon  
  - Retraction artifact icon  
- Adnexal carcinomas (high-level)

---

## MODULE E — Adnexal Tumors (High-Yield)
- Sebaceous tumors  
- Sweat gland tumors  
  - Poroma  
  - Hidrocystoma  
  - Syringoma  
- Follicular tumors  
  - Trichoepithelioma  
  - Pilomatricoma (shadow cell cartoon)  

---

## MODULE F — Soft Tissue Mimics in Skin
- Dermatofibroma  
- Dermatofibrosarcoma protuberans (storiform cartoon)  
- Atypical fibroxanthoma vs pleomorphic dermal sarcoma  
- Kaposi (conceptual spindle with slit-like vessels)  

---

## MODULE G — Immunofluorescence (DIF) — Conceptual Only
- Granular IgA in dermal papillae → DH cartoon  
- Linear IgG/C3 along basement membrane → BP cartoon  
- Intercellular IgG → pemphigus vulgaris cartoon  
- Granular C3 → lupus pattern  

All schematic; no clinical advice.

---

## MODULE H — IHC in Dermatopathology (Conceptual)
- Melanocytic markers: SOX10, MelanA, HMB45  
- Keratin subtypes broad concepts  
- EMA patterns in adnexal tumors  
- CD1a for Langerhans cells  
- CD34 for DFSP vs dermatofibroma concept  
- No lab methodology.

---

## MODULE I — Frozen Section in Dermpath (Mohs Concepts, Non-Clinical)
- Cartoon-only of margin assessment  
- Epidermal edge following  
- No clinical Mohs workflow — only educational morphology.

---

## MODULE J — Pitfalls
- Psoriasiform drug eruption vs psoriasis  
- MF (mycosis fungoides) vs chronic dermatitis  
- Spitz vs melanoma  
- Dysplastic nevus vs melanoma in situ  
- SCC in situ vs LSC  
- DF vs DFSP (CD34 conceptual clue)  
- Panniculitis mimics lymphoma  
- DIF interpretation traps  

---

## MODULE K — Integrated Dermpath Cases
- Inflammatory patterns  
- Melanocytic lesions  
- Keratinocytic neoplasms  
- Adnexal tumors  
- Soft tissue mimics  
- DIF cases  
- Complex pattern-mismatch cases  

---

# **5. INTERACTIVE MODELS**

| Interactive | Purpose | Inputs | Outputs | Visuals | Guardrails |
|------------|----------|--------|----------|---------|------------|
| Pattern Finder | Identify primary pattern | Cartoon biopsy slices | Pattern category | Pattern icons | Educational only |
| Melanocytic Classifier | Distinguish nevus vs melanoma-like | Symmetry, maturation, pagetoid clues | Category tendency | Icons | Not diagnostic |
| Psoriasiform vs Lichenoid Tool | Compare features | Epidermal/dermal cartoon clues | Best-fitting pattern | Tile UI | Non-clinical |
| Vesiculobullous Split Mapper | Determine split level | Cartoon blister | INTRA vs SUBEPIDERMAL | Simple diagrams | Educational only |
| DIF Pattern Simulator | Interpret synthetic DIF patterns | Icon fluorescence distributions | Pattern name | Schematic | No lab advice |
| DF vs DFSP Navigator | CD34 & morphology clues | Cartoon histology | Broad category | Icons | Educational-only |
| Adnexal Tumor Explorer | Explore adnexal families | Feature set | Family | Icons | Synthetic |
| Integrated Case Builder | Combine morph + DIF + IHC clues | Case reasoning | Synthetic report | Template | Not for clinical care |

---

# **6. ASSESSMENT (Session-Only)**

Question types:
- MCQ  
- Pattern classification  
- Melanocytic lesion differentiation  
- Vesiculobullous categorization  
- Stain/IHC conceptual use  
- DIF interpretation  
- Adnexal tumors  
- Pitfall recognition  
- Integrated dermpath cases  

Result:  
- “You answered X/Y correctly this session.”  
- No data stored.

---

# **7. DERMATOPATH REASONING FRAMEWORK**

1. **Identify primary pattern** (spongiotic, psoriasiform, lichenoid, vesiculobullous, granulomatous, panniculitis)  
2. **Evaluate epidermal clues**  
3. **Evaluate dermal infiltrate**  
4. **Evaluate distribution (superficial vs deep)**  
5. **Assess cell types**  
6. **Check for special architectural clues**  
7. **Integrate IHC & DIF (conceptually)**  
8. **Build differential by family**  
9. **Form synthetic diagnostic impression**

Common pitfalls:
- Calling MF too often  
- Overcalling atypical melanocytic lesions  
- Misinterpreting spongiosis vs acantholysis  
- Miscalling lichen planus vs lupus  
- Misinterpreting DIF artifacts

---

# **8. ACCESSIBILITY, EQUITY, SAFETY**

- WCAG 2.2 AA compliant  
- Dark-mode-first  
- Icons only  
- Neutral case names  
- STRICT disclaimer:  
  “Educational only. Not for diagnosis or patient care.”  
- Offline support  
- No tracking or user data  

---

# **9. TECH ARCHITECTURE**

Stack:
- React + TypeScript  
- Tailwind + shadcn/ui  
- Zustand state (session-only)  
- Service Worker for offline use  

Routes:
- `/foundations`  
- `/inflammatory`  
- `/melanocytic`  
- `/keratinocytic`  
- `/adnexal`  
- `/soft-tissue-mimics`  
- `/dif`  
- `/ihc`  
- `/pitfalls`  
- `/cases`  
- `/assessment`  
- `/settings`

Settings:
- Dark/light  
- About  
- Disclaimer  

---

# **10. DATA SCHEMAS**

### Dermpath Case Schema

{
"id": "dp_case_11",
"pattern": "lichenoid",
"epidermal_clues": ["sawtoothing", "Civatte bodies"],
"dermal_clues": ["band-like lymphocytes"],
"dif": "negative",
"question": "Best broad pattern category?",
"options": ["Spongiotic", "Lichenoid", "Psoriasiform"],
"correct": "Lichenoid",
"rationale": "Classic lichenoid cartoon features."
}


### DIF Schema


{
"id": "dif_pv",
"pattern": "intercellular IgG",
"interpretation": "Pemphigus-type DIF (conceptual only)"
}


### IHC Concept Entry


{
"id": "cd34_dfsp",
"marker": "CD34",
"notes": "CD34-positive spindle cell proliferation favors DFSP in this conceptual module."
}


---

# **11. SCREEN INVENTORY & WIREFRAMES**

### HOME  
Modules: Foundations • Inflammatory • Melanocytic • Keratinocytic • Adnexal • Soft Tissue Mimics • DIF • IHC • Pitfalls • Cases • Assessment • Settings

### MODULE OVERVIEW  
- Section summary  
- Sub-lessons  
- Quick quiz

### LESSON PAGE  
- Pattern diagrams  
- Feature callouts  
- IHC/DIF conceptual cards  
- Pitfall alerts  

### CASE ENGINE  
- Pattern-first reasoning  
- Melanocytic + inflammatory integrated cases  
- Immediate feedback  

### ASSESSMENT  
- MCQ + cartoon-based pattern matching  
- Session-only scoring  

### SETTINGS  
- Dark/light  
- About  
- Disclaimer  

---

# **12. COPY & CONTENT KIT**

Examples:
- “Start with the **primary pattern**.”  
- “Spongiosis = intercellular edema.”  
- “Pagetoid spread is a melanoma red flag, conceptually.”  
- “Linear IgG/C3 along BM favors bullous pemphigoid.”  
- “DFSP tends to be CD34-positive, dermatofibroma is usually negative.”  

Glossary includes: spongiosis, acanthosis, Civatte bodies, pagetoid, adnexal, retraction artifact, storiform, shadow cells, etc.

---

# **13. CREATOR-SIDE A/B TESTING (No In-App Tracking)**
- Compare tile vs flowchart pattern recognition  
- Evaluate clarity of DIF cartoons  
- Test melanocytic vs inflammatory differentiation learning modes  

---

# **14. QA CHECKLIST**
- Dermpath pattern frameworks accurate  
- Melanocytic & keratinocytic logic correct  
- DIF icons & IHC principles conceptual only  
- No real images  
- No treatment or patient-care advice  
- Offline/dark mode validated  

---

# **15. ROADMAP**
- M0: Foundations + Inflammatory  
- M1: Melanocytic + Keratinocytic  
- M2: Adnexal + Soft Tissue Mimics  
- M3: DIF + IHC  
- M4: Pitfalls + 100-case bank  

---

# **ACCEPTANCE CRITERIA**
- Covers full dermatopath curriculum for pathology residency  
- ALL synthetic, icon-based  
- No diagnoses, treatment, or real images  
- Offline + dark-mode  
- High-yield, pattern-based framework  

---

## **NOW GENERATE**
Using this blueprint, generate the complete **Dermatopath Master** educational app specification according to the required Output Format and constraints.  
