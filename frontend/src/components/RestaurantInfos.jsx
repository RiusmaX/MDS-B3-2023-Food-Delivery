function RestaurantInfos ({ restaurant }) {
  const { attributes } = restaurant

  return (
    <>
      <p>{attributes.description}</p>
      <iframe
        width='80%'
        height='300'
        frameborder='0'
        marginheight='0'
        marginwidth='0'
        src='https://maps.google.com/maps?q=MyDigitalSchool Nantes&hl=fr&z=12&amp;output=embed'
      />
    </>
  )
}

export default RestaurantInfos
