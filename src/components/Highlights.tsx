const highlights = [
  {
    title: "30 Kill Solo Victory",
    date: "March 15, 2024",
    description: "Personal best in Warzone solos with aggressive gameplay",
  },
  {
    title: "Squad Wipe Clutch",
    date: "March 10, 2024",
    description: "1v4 clutch in final circle using only a pistol",
  },
  {
    title: "Tournament Victory",
    date: "March 1, 2024",
    description: "First place in community tournament with $5000 prize pool",
  },
];

const Highlights = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {highlights.map((highlight, index) => (
        <div
          key={index}
          className="highlight-card"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
          <p className="text-sm text-gray-400 mb-2">{highlight.date}</p>
          <p className="text-gray-300">{highlight.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Highlights;