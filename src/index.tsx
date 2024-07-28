import { createRoot } from 'react-dom/client'
import { App } from './app'
import { StrictMode } from 'react'
import './index.scss'
// import styles from './index.module.scss'

const domNode = document.getElementById('root') as HTMLDivElement
const root = createRoot(domNode)
root.render(
	<StrictMode>
		<App />
	</StrictMode>
)
