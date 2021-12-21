export const generateRating = (rating: number) => {
  const stars = []
  for (let i = 0; i < 5; i++) {
    if (rating > i) {
      stars.push(
        <span style={{ fontSize: '1.3rem', color: '#e29f0f' }}>&#9733;</span>
      )
    } else {
      stars.push(
        <span style={{ fontSize: '1.3rem', color: '#6d6c69' }}>&#x2605;</span>
      )
    }
  }
  return stars
}
