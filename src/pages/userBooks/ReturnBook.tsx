import React, { useState, VoidFunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import { Book } from '../../models/Book'

type FormBookType = { book?: Book }

const ReturnBook: VoidFunctionComponent<FormBookType> = ({
  book = {
    summary: '',
  } as Book,
}) => {
  const [formValue, setFormValue] = useState<Book>(book)
  const [submit, setSubmit] = useState(false)

  const submitForm = () => {
    setSubmit(true)
    const isEmpty = Object.values(formValue).every(
      (x) =>
        x === null || !(x as string).length || x === 0 || typeof x === undefined
    )
    if (!isEmpty) {
      // if (book._id) {
      //   dispatch(editBook(formValue, history))
      // } else {
      //   dispatch(postBook(formValue, history))
      //   history('/')
      // }
    }
  }

  return (
    <>
      <div className="w-full xl:w-10/12 xl:mb-0 px-4 mx-auto bg-white p-4">
        <div className="grid  gap-8 grid-cols-1">
          <div className="flex flex-col ">
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
            <div className="flex-auto w-full mb-1 text-xs space-y-2">
              <label
                htmlFor="summary"
                className="font-semibold text-gray-600 py-2"
              >
                Review
                <abbr className="text-red-500" title="required">
                  *
                </abbr>
              </label>
              <textarea
                required
                name="summary"
                id="summary"
                className="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4"
                placeholder="Enter the book review"
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
              <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                <Link
                  to="/books"
                  className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm text-center shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
                >
                  Cancel
                </Link>
                <button
                  onClick={() => submitForm()}
                  className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500"
                >
                  <Link
                    to="/books"
                    className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500"
                  >
                    Save
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReturnBook
