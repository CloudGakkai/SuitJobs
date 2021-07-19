export default {
  getStaticData: () => {
    return {
      ok: true,
      data: require('../Fixtures/staticData.json')
    }
  }
}
