import { connect } from '../../../Themes/OsmiProvider'

export default connect({
  container: 'flex bg-white',
  topSection: 'flex full flex-wrap items-center py-10',
  topLogo: 'w-80 h-80 mb-4',
  topTitle: 'text-2xl font-regular text-gray-900 text-center',
  inputWrapper: 'mb-2',
  resumeTitleSection: 'text-lg font-semibold text-gray-900',
  footer: 'absolute bottom-0 pt-2 z-20 w/100',
  innerFooter: 'bg-white w/100 p-4',
  bottomSheetContainer: 'flex full bg-white z-30 rounded-3xl pt-5',
  countryItem: 'border-b border-gray-800 border-opacity-20 pb-3 mb-3',
  countryItemLabel: 'text-sm text-regular text-gray-900'
})
