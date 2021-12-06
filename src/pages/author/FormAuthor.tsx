import React, { ChangeEvent, useState, VoidFunctionComponent } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { editAuthor, postAuthor } from '../../redux/authors/authors.action'
import { AppState } from '../../types'
import Spinner from '../../components/Spinner'
import { Link } from 'react-router-dom'
import { Author } from '../../models/Author'
import ErrorMessage from '../../components/Error'
import { useNavigate } from 'react-router-dom'

type FormAuthorType = { author?: Author }

const FormAuthor: VoidFunctionComponent<FormAuthorType> = ({
  author = {
    authorId: '',
    firstName: '',
    lastName: '',
  } as Author,
}) => {
  const authors = useSelector((state: AppState) => state?.authors)
  const dispatch = useDispatch()
  const history = useNavigate()

  const [authorFormValue, setauthorFormValue] = useState<Author>(author)
  const [submitForm, setsubmitForm] = useState(false)

  const authorSubmitForm = () => {
    setsubmitForm(true)
    const isEmpty = Object.values(authorFormValue).every(
      (x) => x === null || !(x as string).length || typeof x === undefined
    )
    if (!isEmpty) {
      if (author._id) {
        dispatch(editAuthor(authorFormValue, history))
      } else {
        dispatch(postAuthor(authorFormValue, history))
      }
    }
  }
  if (authors.loading) {
    return <Spinner />
  }

  return (
    <>
      <div className="w-full xl:w-10/12 xl:mb-0 px-4 mx-auto bg-white p-4 shadow-lg">
        <div className="grid  gap-8 grid-cols-1">
          <div className="flex flex-col ">
            <div className="flex flex-col sm:flex-row items-center">
              <h2 className="font-semibold text-lg mr-auto">
                {author._id ? 'Edit Author' : ' Add new author'}
              </h2>
              <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0" />
            </div>
            <div className="mt-5">
              {authors.error && <ErrorMessage error={authors.error} />}
              <div className="form">
                <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label
                      htmlFor="firstName"
                      className="font-semibold text-gray-600 py-2"
                    >
                      First Name
                      <abbr className="text-red-500" title="required">
                        *
                      </abbr>
                    </label>
                    <input
                      placeholder="First name"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      required
                      type="string"
                      name="firstName"
                      id="firstName"
                      value={authorFormValue?.firstName}
                      onChange={(e) =>
                        setauthorFormValue({
                          ...authorFormValue,
                          firstName: e.target.value,
                        })
                      }
                    />
                    {submitForm && !authorFormValue.firstName && (
                      <p className="text-red-500 text-xs">
                        Please fill out this field.
                      </p>
                    )}
                  </div>
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label
                      htmlFor="lastName"
                      className="font-semibold text-gray-600 py-2"
                    >
                      Last name
                      <abbr className="text-red-500" title="required">
                        *
                      </abbr>
                    </label>
                    <input
                      placeholder="Last Name"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      required
                      type="string"
                      name="lastName"
                      id="lastName"
                      value={authorFormValue?.lastName}
                      onChange={(e) =>
                        setauthorFormValue({
                          ...authorFormValue,
                          lastName: e.target.value,
                        })
                      }
                    />
                    {submitForm && !authorFormValue.lastName && (
                      <p className="text-red-500 text-xs">
                        Please fill out this field.
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                  <Link
                    to="/authors"
                    className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm txt-center shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
                  >
                    Cancel
                  </Link>
                  <button
                    onClick={() => authorSubmitForm()}
                    className="mb-2 md:mb-0 bg-indigo-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500"
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

export default FormAuthor
