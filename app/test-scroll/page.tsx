export default function TestScrollPage() {
  return (
    <div className="min-h-screen bg-[#212121] text-white p-4">
      <h1 className="text-3xl font-bold mb-8">Тест мобильного скролла</h1>
      
      {/* Генерируем много контента для тестирования скролла */}
      {Array.from({ length: 50 }, (_, i) => (
        <div key={i} className="mb-8 p-4 bg-[#282828] rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Секция {i + 1}</h2>
          <p className="text-gray-300">
            Это тестовый контент для проверки мобильного скролла. 
            Здесь должно быть достаточно текста, чтобы можно было прокручивать страницу.
          </p>
          <p className="text-gray-300 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      ))}
      
      <div className="mb-8 p-4 bg-green-800 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">✅ Достигли конца страницы!</h2>
        <p className="text-gray-300">
          Если вы видите этот блок, значит скролл работает правильно!
        </p>
      </div>
    </div>
  )
}
