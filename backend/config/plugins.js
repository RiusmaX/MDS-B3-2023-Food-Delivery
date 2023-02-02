module.exports = ({env}) => ({
  "generate-data": {
    enabled: true
  },
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        restaurant: {
          field: 'slug',
          references: 'name'
        },
        dish: {
          field: 'slug',
          references: 'name'
        }
      }
    }
  }
})