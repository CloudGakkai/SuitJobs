import { connect } from '../../Themes/OsmiProvider'

export default connect({
  container: 'flex bg-white pt-12',
  topContainer: 'px-4',
  helloLabel: 'text-8xl font-bold text-gray-900',

  // search
  searchContainer: 'full row items-center rounded-xl border border-neutral-light p-3 mt-4 rounded-xl',
  searchPlaceholder: 'text-base font-regular text-silver-300 ml-2',
})
