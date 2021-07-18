import { connect } from '../../../Themes/OsmiProvider'

export default connect({
  container: 'flex row items-center justify-center border-b border-gray-800 border-opacity-20 pb-1',
  input: 'flex full text-base text-regular text-gray-900 ml-2',
  btnCountryCode: 'bg-silver-100 rounded-md border border-gray-800 border-opacity-20 p-1 px-2',
  btnCountryCodeLabel: 'text-base text-regular text-gray-800',
  error: 'text-sm text-regular text-red-500 mt-2'
})
