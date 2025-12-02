import './styles/main.css'
import { heroSection } from './sections/hero.js'
import { conceptSection } from './sections/concept.js'
import { diagramsSection } from './sections/diagrams.js'
import { frontendSection } from './sections/frontend.js'
import { backendSection } from './sections/backend.js'
import { testingSection } from './sections/testing.js'
import { deploymentSection } from './sections/deployment.js'
import { footerSection } from './sections/footer.js'

// Compose all sections into the app
document.querySelector('#app').innerHTML = `
  ${heroSection()}
  ${conceptSection()}
  ${diagramsSection()}
  ${frontendSection()}
  ${backendSection()}
  ${testingSection()}
  ${deploymentSection()}
  ${footerSection()}
`
