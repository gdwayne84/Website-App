
import React, { useState, useMemo } from 'react';
import { RESOURCES } from '../constants';
import { Resource, ResourceCategory } from '../types';
import { SearchIcon } from '../components/icons/SearchIcon';
import { DownloadIcon } from '../components/icons/DownloadIcon';
import { FilePdfIcon } from '../components/icons/FilePdfIcon';
import { FilePptIcon } from '../components/icons/FilePptIcon';
import { FileDocIcon } from '../components/icons/FileDocIcon';
import { FileType } from '../types';

const FileTypeIcon: React.FC<{ type: FileType }> = ({ type }) => {
    switch (type) {
        case FileType.PDF: return <FilePdfIcon />;
        case FileType.PPT: return <FilePptIcon />;
        case FileType.DOC: return <FileDocIcon />;
        default: return null;
    }
};

const ResourceCard: React.FC<{ resource: Resource }> = ({ resource }) => (
    <div className="bg-slate-800 p-6 rounded-lg shadow-lg flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1">
        <div>
            <div className="flex items-center mb-4">
                <div className="text-amber-400 mr-3">
                    <FileTypeIcon type={resource.fileType} />
                </div>
                <h3 className="text-xl font-bold text-white">{resource.title}</h3>
            </div>
            <p className="text-slate-400 mb-6">{resource.description}</p>
        </div>
        <a 
            href={resource.fileUrl} 
            download 
            className="inline-flex items-center justify-center w-full px-4 py-2 border border-transparent text-base font-medium rounded-md text-slate-900 bg-amber-400 hover:bg-amber-500 transition-colors"
        >
            <DownloadIcon />
            <span className="ml-2">Download</span>
        </a>
    </div>
);

const Downloads: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState<ResourceCategory | 'All'>('All');

    const categories = ['All', ...Object.values(ResourceCategory)];

    const filteredResources = useMemo(() => {
        return RESOURCES.filter(resource => {
            const matchesCategory = activeCategory === 'All' || resource.category === activeCategory;
            const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                                  resource.description.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [searchTerm, activeCategory]);

    return (
        <div className="bg-slate-900 py-16 sm:py-24 animate-fade-in">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <header className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">Resource Hub</h1>
                    <p className="mt-4 text-lg text-slate-400">Find and download the materials you need to succeed.</p>
                </header>

                {/* Filters */}
                <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
                    <div className="relative w-full md:w-1/2 lg:w-1/3">
                        <input
                            type="text"
                            placeholder="Search resources..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-slate-800 text-white border border-slate-700 rounded-md focus:ring-amber-400 focus:border-amber-400"
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <SearchIcon />
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category as ResourceCategory | 'All')}
                                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                                    activeCategory === category 
                                    ? 'bg-amber-400 text-slate-900' 
                                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Resource Grid */}
                {filteredResources.length > 0 ? (
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredResources.map(resource => (
                            <ResourceCard key={resource.id} resource={resource} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16 bg-slate-800 rounded-lg">
                        <p className="text-slate-400 text-lg">No resources found. Try adjusting your search or filter.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Downloads;
