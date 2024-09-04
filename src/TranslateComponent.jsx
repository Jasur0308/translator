import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTranslation } from './translatePart';
import { Puff } from 'react-loader-spinner';

const TranslateComponent = () => {
    const [text, setText] = useState('');
    const [targetLang, setTargetLang] = useState('uz');
    const dispatch = useDispatch();
    const { translation, loading, error } = useSelector((state) => state.translate);

    const handleTranslate = () => {
        dispatch(fetchTranslation(text, targetLang));
    };

    const handleClear = () => {
        setText('');
        setTargetLang('uz');
    };

    return (
        <div className='container mx-auto mt-12 p-6 bg-white rounded-lg shadow-lg max-w-4xl'>
            <h2 className='text-2xl font-bold mb-6 text-gray-900 text-center'>Text Translator</h2>
            <div className="w-full bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="mb-4">
                    <textarea 
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Enter text here..."
                        className="w-full h-40 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="language" className="block text-gray-700 font-medium mb-2">Select Target Language:</label>
                    <select 
                        id="language"
                        value={targetLang}
                        onChange={(e) => setTargetLang(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                    >
                        <option value="uz">Uzbek</option>
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        {/* Add more languages as needed */}
                    </select>
                </div>
                <div className="flex gap-4">
                    <button
                        onClick={handleTranslate}
                        disabled={loading}
                        className={`flex-1 py-3 rounded-lg text-white font-semibold transition duration-300 ${
                            loading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
                        }`}
                    >
                        {loading ? <Puff color="#ffffff" height={20} width={20} /> : 'Translate'}
                    </button>
                    <button
                        onClick={handleClear}
                        className="flex-1 py-3 bg-gray-500 text-white rounded-lg font-semibold hover:bg-gray-600 transition duration-300"
                    >
                        Clear
                    </button>
                </div>
                {error && <p className="mt-4 text-red-600 text-center">{error}</p>}
                {translation && <p className="mt-4 text-gray-800 text-center">Translation: <strong>{translation}</strong></p>}
            </div>
        </div>
    );
};

export default TranslateComponent;