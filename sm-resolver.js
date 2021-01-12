import * as Src/slices from './src/slices'
import { Slices as EssentialSlices } from 'essential-slices'

const __allSlices = {  ...EssentialSlices, ...Src/slices, }

const NotFound = ({ sliceName }) => {
	console.log(`[sm - resolver] component "${sliceName}" not found.`)
	return process.env.NODE_ENV !== 'production' ? <p>component "{sliceName}" not found.</p> : <div />
}

export default function Register({ sliceName }) {
	return __allSlices[sliceName] ? __allSlices[sliceName] : () => <NotFound sliceName={sliceName} />
}

  