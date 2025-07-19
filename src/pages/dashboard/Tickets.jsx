import React, { useState } from 'react';
import { ChevronDown, Search, Filter, Plus, Edit, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';
import InputBox from '../../components/micros/InputBox';
import { useFormik } from 'formik';

const Tickets = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8);
    const [sortBy, setSortBy] = useState('name');
    const [sortOrder, setSortOrder] = useState('asc');
    const [filterStatus, setFilterStatus] = useState('all');

    const formik = useFormik({
        initialValues: {
            searchTerm: ''
        },
        onSubmit: (values) => {
            console.log(values);
        }
    });
    // Dummy data
    const contacts = [
        {
            id: 1,
            name: 'Ethan Harper',
            email: 'ethan.harper@example.com',
            phone: '(555) 123-4567',
            company: 'Tech Solutions Inc.',
            leadStatus: 'Qualified',
            contactOwner: 'No owner',
            avatar: 'EH'
        },
        {
            id: 2,
            name: 'Olivia Bennett',
            email: 'olivia.bennett@example.com',
            phone: '(555) 987-6543',
            company: 'Global Innovations LLC',
            leadStatus: 'Lead',
            contactOwner: 'No owner',
            avatar: 'OB'
        },
        {
            id: 3,
            name: 'Noah Carter',
            email: 'noah.carter@example.com',
            phone: '(555) 246-8024',
            company: 'Digital Dynamics Co.',
            leadStatus: 'Prospect',
            contactOwner: 'No owner',
            avatar: 'NC'
        },
        {
            id: 4,
            name: 'Ava Mitchell',
            email: 'ava.mitchell@example.com',
            phone: '(555) 369-1212',
            company: 'Strategic Ventures Ltd.',
            leadStatus: 'Customer',
            contactOwner: 'No owner',
            avatar: 'AM'
        },
        {
            id: 5,
            name: 'Liam Foster',
            email: 'liam.foster@example.com',
            phone: '(555) 789-0123',
            company: 'Future Tech Group',
            leadStatus: 'Qualified',
            contactOwner: 'No owner',
            avatar: 'LF'
        },
        {
            id: 6,
            name: 'Isabella Reed',
            email: 'isabella.reed@example.com',
            phone: '(555) 456-7890',
            company: 'Innovative Solutions Corp.',
            leadStatus: 'Lead',
            contactOwner: 'No owner',
            avatar: 'IR'
        },
        {
            id: 7,
            name: 'Jackson Hayes',
            email: 'jackson.hayes@example.com',
            phone: '(555) 654-3210',
            company: 'Advanced Systems Inc.',
            leadStatus: 'Prospect',
            contactOwner: 'No owner',
            avatar: 'JH'
        },
        {
            id: 8,
            name: 'Emma Rodriguez',
            email: 'emma.rodriguez@example.com',
            phone: '(555) 321-9876',
            company: 'Creative Marketing Agency',
            leadStatus: 'Customer',
            contactOwner: 'No owner',
            avatar: 'ER'
        },
        {
            id: 9,
            name: 'William Chen',
            email: 'william.chen@example.com',
            phone: '(555) 147-2583',
            company: 'Cloud Computing Solutions',
            leadStatus: 'Qualified',
            contactOwner: 'No owner',
            avatar: 'WC'
        },
        {
            id: 10,
            name: 'Sophia Johnson',
            email: 'sophia.johnson@example.com',
            phone: '(555) 852-9630',
            company: 'Data Analytics Pro',
            leadStatus: 'Lead',
            contactOwner: 'No owner',
            avatar: 'SJ'
        }
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'Qualified': return '#22C55E';
            case 'Lead': return '#3B82F6';
            case 'Prospect': return '#F59E0B';
            case 'Customer': return '#8B5CF6';
            default: return '#6B7280';
        }
    };

    const getAvatarColor = (name) => {
        const colors = ['#EF4444', '#F59E0B', '#22C55E', '#3B82F6', '#8B5CF6', '#EC4899', '#06B6D4', '#84CC16'];
        const index = name.charCodeAt(0) % colors.length;
        return colors[index];
    };

    // Filter and sort contacts
    const filteredContacts = contacts.filter(contact => {
        const matchesSearch = contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.company.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesFilter = filterStatus === 'all' || contact.leadStatus === filterStatus;

        return matchesSearch && matchesFilter;
    });

    const sortedContacts = [...filteredContacts].sort((a, b) => {
        let aValue = a[sortBy];
        let bValue = b[sortBy];

        if (sortBy === 'name') {
            aValue = aValue.toLowerCase();
            bValue = bValue.toLowerCase();
        }

        if (sortOrder === 'asc') {
            return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
        } else {
            return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
        }
    });

    // Pagination
    const totalPages = Math.ceil(sortedContacts.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentContacts = sortedContacts.slice(startIndex, endIndex);

    const handleSort = (column) => {
        if (sortBy === column) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortBy(column);
            setSortOrder('asc');
        }
    };

    const filter = [
        {
            id: "name",
            label: "Name",
            value: "name"
        },
        {
            id: "created date",
            label: "Created Date",
            value: "created date"
        },
        {
            id: "lead status",
            label: "Lead Status",
            value: "lead status"
        },

        {
            id: "last activity date",
            label: "Last Activity Date",
            value: "last activity date"
        },
    ]

    return (
        <div className='bg-[#FFFFFF] w-full h-full rounded-[8px] px-[55px] py-[18px]'>
            {/* Header */}
            <p className='text-[#0D141C] text-[20px] font-inter font-[700] leading-[40px] mb-2'>Contacts</p>

            {/* Filters and Add Contact */}
            <div className='flex justify-between items-center mb-4'>
                <div className='flex w-fit gap-[18px]'>
                    {filter.map((item) => (
                        <div key={item.id} className='flex justify-center items-center gap-[2px] w-fit'>

                            <p className='text-[#0057A3] text-[13px] font-inter font-[700] leading-[24px]'>{item.label}</p>
                            <img src="/src/assets/filter.svg" alt="" />
                        </div>
                    ))}
                    <div className='flex items-center gap-[4px] w-fit'>
                        <img src="/src/assets/advancedFilter.svg" alt="" />
                        <p className='text-[#0057A3] text-[13px] font-inter font-[700] leading-[24px]'>Advance Filter</p>
                    </div>
                </div>
                <button className='bg-[#2B6CB0] text-[#FFFFFF] text-[14px] font-inter font-[600] border-none px-[16px] py-[8px] rounded-[4px] w-fit'>
                    Add Contact
                </button>
            </div>

            {/* Search and Export */}
            <div className=' bg-[#F7FAFC] w-full rouded-tl-[8px] rouded-tr-[8px] mt-[28px] px-[32px] py-[10px]'>
                <div className=' w-full flex justify-between items-center'>
                    <div className="rounded-[8px] w-[288px] h-[41px]  flex justify-between bg-[#E5EDF5] px-[15px] py-[12px]">
                        <div className="w-full flex gap-[32px] items-center ">
                            <img
                                src="/src/assets/search.svg"
                                className="w-[24px] h-[24px]  cursor-pointer"
                            />

                            <input
                                className="border-none outline-none bg-[#E5EDF5] w-full font-poppins text-[14px] leading-[22px] text-[#A2A2A2]"
                                placeholder="Search... "
                            />
                        </div>


                    </div>

                    <div className='flex gap-[11px]'>
                        <button className='bg-[#E5EDF5] px-[14px] py-[8px] rounded-[4px] text-[14px] font-inter border-none text-[#4575A1] text-[14px] leading-[24px] font-[400] font-inter'>Export</button>
                        <button className='bg-[#E5EDF5] px-[14px] py-[8px] rounded-[4px] text-[14px] font-inter border-none text-[#4575A1] text-[14px] leading-[24px] font-[400] font-inter'>Import</button>
                        <button className='bg-[#E5EDF5] px-[14px] py-[8px] rounded-[4px] text-[14px] font-inter border-none text-[#4575A1] text-[14px] leading-[24px] font-[400] font-inter'>Edit Columns</button>
                    </div>

                </div>

                {/* seprator */}
                <div className='w-full h-[1px] border mt-[8.5px] border-[#E5EDF5]'></div>
            </div>

            {/* Table */}


            <div className="w-full">
                <table className="w-full">
                    <thead className="bg-[#F7FAFC]">
                        <tr className="text-[#374151] text-sm font-medium">
                            <th className="text-left px-[32px] py-[13px]">
                                <input type="checkbox" className="w-[26px] h-[27px] rounded-[8px] bg-[#E5EDF5] cursor-pointer" />
                            </th>
                            <th className="text-left px-[8px] py-[13px]">Name</th>
                            <th className="text-left px-[8px] py-[13px]">Email</th>
                            <th className="text-left px-[8px] py-[13px]">Phone No.</th>
                            <th className="text-left px-[8px] py-[13px]">Company</th>
                            <th className="text-left px-[8px] py-[13px]">Lead Status</th>
                            <th className="text-left px-[8px] py-[13px]">Contact Owner</th>

                        </tr>
                    </thead>
                    <tbody>
                        {currentContacts.map((contact) => (
                            <tr
                                key={contact.id}
                                className="border-t border-[#E5EDF5] hover:bg-[#F9FAFB]"
                            >
                                <td className="px-[32px] py-[18px]">
                                    <input type="checkbox" className="w-[26px] h-[27px] rounded-[8px] bg-[#E5EDF5] cursor-pointer" />
                                </td>

                                <td className="flex items-center gap-[10px] px-[8px] py-[18px] text-[14px] leading-[21px] text-[#0D141C] font-inter font-[400]">

                                    {contact.name}
                                </td>
                                <td className="px-[8px] py-[18px cursor-pointer">
                                    <p className='text-[14px] leading-[21px] text-[#4575A1] font-inter font-[400]'>{contact.email}</p>
                                </td>
                                <td className="px-[8px] py-[18px]">
                                    <p className='text-[14px] leading-[21px] text-[#4575A1] font-inter font-[400]'>{contact.phone}</p>
                                </td>
                                <td className="px-[8px] py-[18px]">
                                    <p className='text-[14px] leading-[21px] text-[#4575A1] font-inter font-[400]'>{contact.company}</p>
                                </td>
                             

                                <td>
                                    <div className=' bg-[#E5EDF5] w-[108px] px-[16px] py-[8px] rounded-[12px]'>
                                        <p className='text-[#0D141C] text-center font-inter text-[14px] leading-[21px] font-[500]'>{contact.leadStatus}</p>
                                    </div>
                                </td>
                                <td className="px-[8px] py-[18px] text-[#4575A1] text-[14px] leading-[21px] font-inter font-[400px] ">{contact.contactOwner}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>







        </div>
    );
};

export default Tickets;