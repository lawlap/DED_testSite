# DED Website Local Copy

**Created:** January 23, 2026
**Last Updated:** February 17, 2026
**Source:** https://business.nmsu.edu/ded/

---

## Overview

This is a local working copy of the NMSU Doctor of Economic Development (DED) program website, downloaded for development and updates.

---

## Summary of Changes

### Visual Redesign
- **Circular icon buttons** replaced large square buttons on main page
- **Compact info cards** section with Program History and Contact (with clickable icons)
- **Styled announcement callout** for application deadlines
- **Program & Application Details** section with graduate placement highlights
- **Consistent crimson (#8c0b42) color theme** throughout

### New Sidebar Navigation (All Pages)
- Circular icons for each navigation item
- **Crimson divider bar** separating internal DED pages from external links
- Consistent navigation applied across all 7 DED pages

**Internal DED Pages:**
1. Doctor of Economic Development (Home)
2. Admissions Requirements
3. Financial Assistance
4. Alumni & Placement
5. Current Students
6. FAQ
7. Program History

**External Links (below divider):**
1. DED Courses (Catalog)
2. Ag Economics Faculty
3. Graduate School
4. International Students

### Pages Created/Updated

| Page | Status | Notes |
|------|--------|-------|
| `index.html` | Updated | Visual redesign, new navigation, placement highlights |
| `ded-alumni.html` | Created | UTK-style placement page, year-by-year listing |
| `ded-students.html` | Created | Card layout with circular photos, crimson accents, sorted by last name |
| `ded-admissions.html` | Downloaded & Updated | Fixed `${size}` template bug, added new sidebar navigation |
| `ded-financial-assistance.html` | Downloaded & Updated | Added new sidebar navigation |
| `ded-faq.html` | Downloaded & Updated | Added new sidebar navigation |
| `ded-history.html` | Created | Program history content with full page template |

### Current Students Page Format
- Card layout inspired by UTK PhD students page
- Light gray cards with crimson bar across top
- Circular photos (150px display, 300x300px source recommended)
- Students sorted alphabetically by last name

### Current Students (as of February 2026)
1. Amoh, Sandra (Fall 2025)
2. Awuye, Shallan Kwabla (Fall 2022)
3. Danso, Hayford (Fall 2022) - Graduated 2025
4. Fullerton, Steven (Fall 2022)
5. Khaliq, Abdul (Fall 2021)
6. Maina, Simon K. (Fall 2022)
7. Pervez, Iqbal Uddin (Fall 2025)
8. Shahrin, Fahria (Fall 2025)
9. Turaki, Brian (Fall 2022)

### Student Photo Requirements
- Format: JPG preferred (PNG acceptable)
- Size: 300x300 pixels (square)
- Content: Head and shoulders, centered (head near top of frame, shoulders visible below)
- Naming: `Firstname_Lastname_Headshot.jpg`
- Location: `_assets/images/300x300-images/ded-students-pic/`

**IMPORTANT: When adding a new current student, always check that their photo is properly cropped:**
1. Square format (300x300)
2. Head/shoulders centered horizontally
3. Head positioned near top of frame (not vertically centered)
4. Use Python/Pillow to crop and resize if needed:
   ```python
   from PIL import Image
   img = Image.open('source.jpg')
   # Adjust left, top, crop_size to center on head/shoulders
   img_cropped = img.crop((left, top, left + crop_size, top + crop_size))
   img_resized = img_cropped.resize((300, 300), Image.LANCZOS)
   img_resized.save('Firstname_Lastname_Headshot.jpg', 'JPEG', quality=90)
   ```

---

## Original Setup (January 23, 2026)

### Downloaded Website Assets
- Downloaded `index.html` from live site
- Downloaded all CSS files to `_files/css/`
- Downloaded all JS files to `_files/js/`
- Downloaded all images to `_assets/images/`

### Graduate Placement Data
Based on UTK PhD Economics placement page style (https://haslam.utk.edu/economics/phd/)

**`ded-alumni.html`**
- Full alumni placement page with year-by-year listing (2011-2025)
- Format: **Name** - *Organization, Position*
- Data populated from `DED Placement Info.xlsx`

---

## Data Source

Placement data sourced from: `../DED Placement Info.xlsx` (in parent directory)

**Columns used:**
- First Name, Middle Name, Last Name columns
- Graduation Year (official column)
- LinkedIn Graduation Year (fallback)
- Entry Year (for validation)
- First/Current Employ (Employer)
- First/Current Employ (Description)

**Graduation year rule:**
1. Use official "Graduation Year" (column I) if available
2. If empty, do NOT use LinkedIn Graduation Year until graduation is confirmed administratively

**Notes on data:**
- Graduates without placement info are currently omitted from the website
- LinkedIn Graduation Year column has some errors (e.g., dates before entry year - likely HS/college dates)

**Graduates with unconfirmed graduation dates (marked "xx" in Excel - awaiting administrative confirmation):**
- Manuel Lorenzo Reyes-Loya (LinkedIn shows 2012)
- Pavel Trejo (LinkedIn shows 2014)
- Michael Fakutiju (LinkedIn shows 2017)
- Brett Burke (LinkedIn shows 2022)
- Ismaiel Abuamoud (LinkedIn shows 2012, but entry year was 2018 - likely erroneous)

**Graduates missing placement info (to update later):**
- 2025: Shallan Awuye (currently unemployed per Excel)
- 2024: Alex Bernal
- 2022: Brett Burke
- 2020: Shanelle Trail
- 2019: Saleh Idhirij, Noel Martinez
- 2017: Linh Do, Carlos Silva
- 2016: Dale Spencer
- 2015: Jazmine Brantley, Sergio Gonzalez
- 2013: Steven Chavez
- 2012: Emma Loya

---

## File Structure

```
Website/
├── index.html                    # Main DED program page
├── ded-admissions.html           # Admissions requirements
├── ded-alumni.html               # Alumni & placement page
├── ded-faq.html                  # Frequently asked questions
├── ded-financial-assistance.html # Financial assistance info
├── ded-history.html              # Program history
├── ded-students.html             # Current students (card layout)
├── README.md                     # This file
├── _assets/
│   └── images/
│       ├── logo-new.png
│       ├── logo-small.png
│       ├── 400x400-images/
│       ├── 600x600-images/
│       ├── banner-images/
│       ├── logos-icons/
│       ├── michellaneous-images/
│       └── [student photos]
├── _files/
│   ├── css/                      # Stylesheets
│   └── js/                       # Scripts
├── media-galle_files/            # Gallery CSS/JS
└── news-even_files/css/          # News module CSS
```

---

## How to Edit Placement Data

### Alumni Page (ded-alumni.html)

Each year follows this pattern:

```html
<h3 class="placement-year">2024</h3>
<ul class="placement-list">
    <li><span class="placement-name">John Smith</span> &#8211; <span class="placement-position">City of Albuquerque, Economic Development Director</span></li>
    <li><span class="placement-name">Jane Doe</span> &#8211; <span class="placement-position">N/A</span></li>
</ul>
```

### Main Page Highlights (index.html)

Search for "Recent Placements" to find the highlights section:

```html
<li style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>John Smith</strong> &#8211; <em>City of Albuquerque, Economic Development Director (2024)</em></li>
```

---

## Publishing Notes

- **Ready to upload:** All files use relative links (`../`) that will work correctly when uploaded back to the `/ded/` folder on the server.

- **Local preview limitations:** Links to parent COB pages (e.g., `../index.html`, `../about/...`) won't work locally since only the DED folder was downloaded. These will work on the server.

- **External CDN resources:** Some CSS/JS loads from CDNs (Bootstrap, Font Awesome, jQuery, DataTables, Google Fonts). This is intentional.

- **Images:** Student photos are in `_assets/images/`. If adding new student photos, use consistent naming and update the corresponding HTML.

---

## Contact

DED Program Director: Dr. Lawrence LaPlue
Email: DED@nmsu.edu
