'use client'

import React, { useState, useEffect } from 'react'
import { Edit2, Trash } from 'iconsax-reactjs'
import ReactModal from 'react-modal'
import ReusableTable from '@/components/PanelAdminSection/PublicComponent/FormUser'
import { Editor } from 'primereact/editor'
import AlertModal from '@/components/PanelAdminSection/AlertComponents/Alert'

interface Slide {
  id: number
  Slide: string
  button: string
}

const INITIAL_SLIDES: Slide[] = [
  { id: 1, Slide: "اینجا در مکین", button: "درخواست مشاوره" },
  { id: 2, Slide: "ما تو مکین", button: "درخواست مشاوره" },
  { id: 3, Slide: "همیشه در تلاشیم", button: "درخواست مشاوره" },
  { id: 4, Slide: "ما باهم", button: "درخواست مشاوره" },
]

const LOCAL_STORAGE_KEY = 'slides'

const PresentationMakeen: React.FC = () => {
  const columns = ["ردیف", "عنوان اسلاید", "عنوان دکمه", "عملیات"]

  const [slides, setSlides] = useState<Slide[]>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY)
      if (stored) {
        try {
          return JSON.parse(stored) as Slide[]
        } catch {
          return INITIAL_SLIDES
        }
      }
    }
    return INITIAL_SLIDES
  })

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(slides))
  }, [slides])

  // مدیریت modal و فرم و alert
  const [isOpen, setIsOpen] = useState(false)
  const [selectedSlide, setSelectedSlide] = useState<Slide | null>(null)
  const [formData, setFormData] = useState<{ Slide: string; button: string }>({ Slide: '', button: '' })
  const [text, setText] = useState('')





  // مدیریت AlertModal برای حذف
  const [alertOpen, setAlertOpen] = useState(false)
  const [toDeleteId, setToDeleteId] = useState<number | null>(null)

  const openModal = (slide?: Slide) => {
    if (slide) {
      setSelectedSlide(slide)
      setFormData({ Slide: slide.Slide, button: slide.button })
      setText('')
    } else {
      setSelectedSlide(null)
      setFormData({ Slide: '', button: '' })
      setText('')
    }
    setIsOpen(true)
  }

  const handleSubmit = () => {
    if (!formData.Slide.trim() || !formData.button.trim()) {
      alert('لطفا عنوان اسلاید و عنوان دکمه را وارد کنید.')
      return
    }

    if (selectedSlide) {
      setSlides(slides.map(s => s.id === selectedSlide.id ? { ...s, Slide: formData.Slide, button: formData.button } : s))
    } else {
      const newSlide: Slide = {
        id: slides.length ? Math.max(...slides.map(s => s.id)) + 1 : 1,
        Slide: formData.Slide,
        button: formData.button,
      }
      setSlides([...slides, newSlide])
    }
    setIsOpen(false)
  }

  const openDeleteAlert = (id: number) => {
    setToDeleteId(id);
    setAlertOpen(true);
  };


  const handleDeleteConfirm = () => {
    if (toDeleteId !== null) {
      setSlides(slides.filter(s => s.id !== toDeleteId));
      setToDeleteId(null);
      setAlertOpen(false);
    }
  };

  const handleDeleteCancel = () => {
    setToDeleteId(null);
    setAlertOpen(false);
  };
  return (
    <div className='relative'>
      <div className="bg-white px-4 pb-5 rounded-md m-4">
        <ReusableTable
          columns={columns}
          data={slides.map((slide, index) => ({
            "ردیف": index + 1,
            "عنوان اسلاید": slide.Slide,
            "عنوان دکمه": slide.button,
            'عملیات': (
              <div className="flex gap-2" key={slide.id}>
                <Edit2
                  color="#2f80ed"
                  className="cursor-pointer"
                  onClick={() => openModal(slide)}
                  aria-label={`ویرایش اسلاید ${slide.Slide}`}
                />
                <Trash
                  color="#eb5757"
                  className="cursor-pointer"
                  onClick={() => openDeleteAlert(slide.id)}
                  aria-label={`حذف اسلاید ${slide.Slide}`}
                />

              </div>
            ),
          }))}
        />
      </div>

      <button
        onClick={() => openModal()}
        className='
          text-[18px] font-medium text-white h-[53px] w-[144px]
          bg-[#F28C28] rounded-lg py-3 px-6 absolute top-0 left-5 mt-[-60px] hover:cursor-pointer
        '
        aria-label="افزودن اسلاید"
      >
        افزودن اسلاید
      </button>

      <ReactModal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        className='bg-white p-6 rounded-xl shadow-lg w-[768px] h-[550px] mx-auto outline-none'
        overlayClassName='fixed inset-0 bg-black/40 flex items-center justify-center'
        ariaHideApp={false}
      >
        <div className='flex flex-col'>
          <div dir='rtl' className='flex items-center justify-between mt-8'>
            <div className='flex flex-col gap-1'>
              <label className='font-normal text-[16px]' htmlFor="slideInput">عنوان اسلاید</label>
              <input
                id="slideInput"
                value={formData.Slide}
                onChange={e => setFormData({ ...formData, Slide: e.target.value })}
                className='border-[#36A8D9] border-[1px] rounded-[8px] py-2 px-4 w-[340px]'
                autoFocus
              />
            </div>
            <div className='flex flex-col gap-1'>
              <label className='font-normal text-[16px]' htmlFor="buttonInput">عنوان دکمه</label>
              <input
                id="buttonInput"
                value={formData.button}
                onChange={e => setFormData({ ...formData, button: e.target.value })}
                className='border-[#36A8D9] border-[1px] rounded-[8px] py-2 px-4 w-[340px]'
              />
            </div>
          </div>
          <div dir='rtl' className='flex flex-col gap-1 mt-10'>
            <label className='mb-2 text-[16px] font-normal' htmlFor="descEditor">توضیحات سکشن</label>
            <Editor
              id="descEditor"
              value={text}
              onTextChange={e => setText(e.htmlValue ?? '')}
              style={{ height: '100px' }}
            />

          </div>
          <div className='gap-4 flex justify-center mt-[20px]'>
            <button
              onClick={handleSubmit}
              className='
                bg-[#F28C28] rounded-lg text-white py-3 px-6 w-[136px] h-[53px] text-lg font-medium
                hover:text-black hover:border-black hover:bg-green-400 hover:cursor-pointer
              '
            >
              ثبت اسلاید
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className='
                rounded-lg text-[#8E8E93] border-[#8E8E93] border-[1px] py-3 px-6 w-[136px] h-[53px] text-lg font-medium
                hover:cursor-pointer hover:bg-red-400 hover:text-black hover:border-black
              '
            >
              انصراف
            </button>
          </div>
        </div>
      </ReactModal>

      {alertOpen && toDeleteId !== null && (
        <AlertModal
          icon={<Trash className="text-red-500" />}
          title={`حذف اسلاید "${slides.find(s => s.id === toDeleteId)?.Slide}"؟`}
          description="آیا مطمئن هستید که می‌خواهید این اسلاید را حذف کنید؟"
          confirmText="حذف"
          cancelText="انصراف"
          onConfirm={handleDeleteConfirm}
          onCancel={handleDeleteCancel}
        />
      )}


    </div>
  )
}

export default PresentationMakeen
