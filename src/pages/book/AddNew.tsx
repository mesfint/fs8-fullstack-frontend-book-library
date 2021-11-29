import React, {
  ChangeEvent,
  useEffect,
  useState,
  VoidFunctionComponent,
} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { AppState } from '../../types'
import { postBook } from '../../redux/books/books.action'
import Layout from '../../components/layout/Layout'
import Spinner from '../../components/Spinner'
import ImageWithFallback from '../../components/Image'
import { Link } from 'react-router-dom'
import { Book } from '../../models/Book'
import ErrorMessage from '../../components/Error'
import { useNavigate } from 'react-router-dom'

const AddNew: VoidFunctionComponent = () => {
  const books = useSelector((state: AppState) => state?.books)
  const dispatch = useDispatch()
  const history = useNavigate()

  const [formValue, setFormValue] = useState<Book>({
    isbn: 0,
    title: '',
    coverImage: '',
    pageNumber: 0,
    publishedYear: 0,
    quantity: 0,
    rating: 0,
    summary: '',
  } as Book)
  const [submit, setSubmit] = useState(false)
  const submitForm = () => {
    setSubmit(true)
    const isEmpty = Object.values(formValue).every(
      (x) =>
        x === null || !(x as string).length || x === 0 || typeof x === undefined
    )
    if (!isEmpty) {
      dispatch(postBook(formValue, history))
    }
  }
  const loadFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e?.target?.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        setFormValue({ ...formValue, coverImage: reader.result as string })
      }
    }
  }
  if (books.loading) {
    return <Spinner />
  }
  return (
    <>
      <div className="w-full xl:w-10/12 xl:mb-0 px-4 mx-auto bg-white p-4">
        <div className="grid  gap-8 grid-cols-1">
          <div className="flex flex-col ">
            <div className="flex flex-col sm:flex-row items-center">
              <h2 className="font-semibold text-lg mr-auto">Add new book</h2>
              <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0" />
            </div>
            <div className="mt-5">
              {books.error && <ErrorMessage error={books.error} />}
              <div className="form">
                <div className="md:space-y-2 mb-3">
                  <span className="text-xs font-semibold text-gray-600 py-2">
                    Cover Image
                    <abbr className="text-red-500" title="required">
                      *
                    </abbr>
                  </span>
                  <div className="flex items-center py-6">
                    <div className="w-60 h-60 mr-4 flex-none rounded-xl border overflow-hidden">
                      <ImageWithFallback
                        src={formValue.coverImage}
                        className="w-60 h-60 mr-4 object-cover"
                      />
                    </div>
                    <label className="cursor-pointer ">
                      <span className="focus:outline-none text-white text-sm py-2 px-4 rounded-full bg-green-400 hover:bg-green-500 hover:shadow-lg">
                        Browse
                      </span>
                      <input
                        type="file"
                        className="hidden"
                        accept=".jpeg, .png, .jpg"
                        name="coverImage"
                        onChange={(e) => loadFile(e)}
                      />
                    </label>
                    {submit && !formValue.coverImage && (
                      <p className="ml-3 text-red-500 text-xs">
                        Please fill out this field.
                      </p>
                    )}
                  </div>
                </div>
                <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label
                      htmlFor="isbn"
                      className="font-semibold text-gray-600 py-2"
                    >
                      ISBN
                      <abbr className="text-red-500" title="required">
                        *
                      </abbr>
                    </label>
                    <input
                      placeholder="ISBN"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      required
                      type="number"
                      name="isbn"
                      id="isbn"
                      value={formValue?.isbn}
                      onChange={(e) =>
                        setFormValue({
                          ...formValue,
                          isbn: parseInt(e.target.value),
                        })
                      }
                    />
                    {submit && !formValue.isbn && (
                      <p className="text-red-500 text-xs">
                        Please fill out this field.
                      </p>
                    )}
                  </div>
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label
                      htmlFor="title"
                      className="font-semibold text-gray-600 py-2"
                    >
                      Title
                      <abbr className="text-red-500" title="required">
                        *
                      </abbr>
                    </label>
                    <input
                      placeholder="Title"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      required
                      type="text"
                      name="title"
                      id="title"
                      value={formValue?.title}
                      onChange={(e) =>
                        setFormValue({ ...formValue, title: e.target.value })
                      }
                    />
                    {submit && !formValue.title?.length && (
                      <p className="text-red-500 text-xs">
                        Please fill out this field.
                      </p>
                    )}
                  </div>
                </div>
                <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label
                      htmlFor="publishedYear"
                      className="font-semibold text-gray-600 py-2"
                    >
                      Published Year
                      <abbr className="text-red-500" title="required">
                        *
                      </abbr>
                    </label>
                    <input
                      placeholder="Published Year"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      required
                      type="number"
                      name="publishedYear"
                      id="publishedYear"
                      value={formValue?.publishedYear}
                      onChange={(e) =>
                        setFormValue({
                          ...formValue,
                          publishedYear: parseInt(e.target.value),
                        })
                      }
                    />
                    {submit && !formValue.publishedYear && (
                      <p className="text-red-500 text-xs">
                        Please fill out this field.
                      </p>
                    )}
                  </div>
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label
                      htmlFor="pageNumber"
                      className="font-semibold text-gray-600 py-2"
                    >
                      Page Number
                      <abbr className="text-red-500" title="required">
                        *
                      </abbr>
                    </label>
                    <input
                      placeholder="Page Number"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      required
                      type="number"
                      name="pageNumber"
                      id="pageNumber"
                      value={formValue?.pageNumber}
                      onChange={(e) =>
                        setFormValue({
                          ...formValue,
                          pageNumber: parseInt(e.target.value),
                        })
                      }
                    />
                    {submit && !formValue.pageNumber && (
                      <p className="text-red-500 text-xs">
                        Please fill out this field.
                      </p>
                    )}
                  </div>
                </div>
                <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label
                      htmlFor="quantity"
                      className="font-semibold text-gray-600 py-2"
                    >
                      Quantity
                      <abbr className="text-red-500" title="required">
                        *
                      </abbr>
                    </label>
                    <input
                      placeholder="Quantity"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      required
                      type="number"
                      name="quantity"
                      id="quantity"
                      value={formValue?.quantity}
                      onChange={(e) =>
                        setFormValue({
                          ...formValue,
                          quantity: parseInt(e.target.value),
                        })
                      }
                    />
                    {submit && !formValue.quantity && (
                      <p className="text-red-500 text-xs">
                        Please fill out this field.
                      </p>
                    )}
                  </div>
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label
                      htmlFor="rating"
                      className="font-semibold text-gray-600 py-2"
                    >
                      Rating
                      <abbr className="text-red-500" title="required">
                        *
                      </abbr>
                    </label>
                    <input
                      placeholder="Rating"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      required
                      type="number"
                      name="rating"
                      id="rating"
                      value={formValue?.rating}
                      onChange={(e) =>
                        setFormValue({
                          ...formValue,
                          rating: parseInt(e.target.value),
                        })
                      }
                    />
                    {submit && !formValue.rating && (
                      <p className="text-red-500 text-xs">
                        Please fill out this field.
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex-auto w-full mb-1 text-xs space-y-2">
                  <label
                    htmlFor="summary"
                    className="font-semibold text-gray-600 py-2"
                  >
                    Summary
                    <abbr className="text-red-500" title="required">
                      *
                    </abbr>
                  </label>
                  <textarea
                    required
                    name="summary"
                    id="summary"
                    className="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4"
                    placeholder="Enter the book summary"
                    spellCheck="false"
                    defaultValue={''}
                    value={formValue?.summary}
                    onChange={(e) =>
                      setFormValue({ ...formValue, summary: e.target.value })
                    }
                  />
                  {submit && !formValue.summary?.length && (
                    <p className="text-red-500 text-xs">
                      Please fill out this field.
                    </p>
                  )}
                  <p className="text-xs text-gray-400 text-left my-3">
                    You inserted {formValue.summary?.length ?? 0} characters
                  </p>
                </div>
                <p className="text-xs text-red-500 text-right my-3">
                  Required fields are marked with an asterisk
                  <abbr className="text-red-500" title="Required field">
                    *
                  </abbr>
                </p>
                <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                  <Link
                    to="/books"
                    className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
                  >
                    Cancel
                  </Link>
                  <button
                    onClick={() => submitForm()}
                    className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddNew
