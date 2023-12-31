'use client';
import React, { useState } from 'react';

const AddForm = () => {
    const [bookData, setBookData] = useState({
        isbn: '',
        title: '',
        subtitle: '',
        author: '',
        published: '',
        publisher: '',
        pages: '',
        description: '',
        website: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBookData({
            ...bookData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lakukan sesuatu dengan data buku, misalnya kirim ke backend untuk disimpan
        console.log('Data Buku:', bookData);
        // Reset form setelah pengiriman data
        setBookData({
            isbn: '',
            title: '',
            subtitle: '',
            author: '',
            published: '',
            publisher: '',
            pages: '',
            description: '',
            website: '',
        });
    };

    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-dark rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Add Book</h2>
            <div class="max-w-lg mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
                <h2 class="text-2xl font-semibold mb-4">Edit Book</h2>
                <form>
                    <div class="mb-4">
                        <label
                            for="user_id"
                            class="block text-gray-700 text-sm font-bold mb-2"
                        >
                            User ID
                        </label>
                        <input
                            type="text"
                            id="user_id"
                            name="user_id"
                            class="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter User ID"
                            value="12345"
                        />
                    </div>
                    <div class="mb-4">
                        <label
                            for="isbn"
                            class="block text-gray-700 text-sm font-bold mb-2"
                        >
                            ISBN
                        </label>
                        <input
                            type="text"
                            id="isbn"
                            name="isbn"
                            class="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter ISBN"
                            value="978-3-16-148410-0"
                        />
                    </div>
                    <div class="mb-4">
                        <label
                            for="title"
                            class="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            class="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter Title"
                            value="Sample Title"
                        />
                    </div>
                    <div class="mb-4">
                        <label
                            for="subtitle"
                            class="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Subtitle
                        </label>
                        <input
                            type="text"
                            id="subtitle"
                            name="subtitle"
                            class="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter Subtitle"
                            value="Sample Subtitle"
                        />
                    </div>
                    <div class="mb-4">
                        <label
                            for="author"
                            class="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Author
                        </label>
                        <input
                            type="text"
                            id="author"
                            name="author"
                            class="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter Author"
                            value="John Doe"
                        />
                    </div>
                    <div class="mb-4">
                        <label
                            for="published"
                            class="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Published
                        </label>
                        <input
                            type="text"
                            id="published"
                            name="published"
                            class="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter Published Date"
                            value="2022-01-01"
                        />
                    </div>
                    <div class="mb-4">
                        <label
                            for="publisher"
                            class="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Publisher
                        </label>
                        <input
                            type="text"
                            id="publisher"
                            name="publisher"
                            class="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter Publisher"
                            value="Sample Publisher"
                        />
                    </div>
                    <div class="mb-4">
                        <label
                            for="pages"
                            class="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Pages
                        </label>
                        <input
                            type="text"
                            id="pages"
                            name="pages"
                            class="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter Number of Pages"
                            value="300"
                        />
                    </div>
                    <div class="mb-4">
                        <label
                            for="description"
                            class="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            class="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter Description"
                        >
                            A sample book description.
                        </textarea>
                    </div>
                    <div class="mb-4">
                        <label
                            for="website"
                            class="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Website
                        </label>
                        <input
                            type="text"
                            id="website"
                            name="website"
                            class="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter Website URL"
                            value="https://samplewebsite.com"
                        />
                    </div>
                    <div class="flex justify-end">
                        <button
                            type="submit"
                            class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddForm;
