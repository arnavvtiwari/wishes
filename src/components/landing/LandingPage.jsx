import CountdownTimer from '../countdown/CountdownTimer'

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-lavender-100 to-lavender-300 flex items-center justify-center p-4">
      <main className="max-w-4xl w-full">
        <CountdownTimer />
        <div className="mt-12 text-center text-lavender-700 text-lg">
          <p>Prepare for an unforgettable experience...</p>
          <p className="mt-4 animate-pulse">✨ Coming Soon ✨</p>
        </div>
      </main>
    </div>
  )
}

export default LandingPage