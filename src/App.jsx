import CommentRemover from './components/CommentRemover';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">JS Comment Remover</h1>
        <CommentRemover />
      </div>
    </div>
  );
}

export default App;