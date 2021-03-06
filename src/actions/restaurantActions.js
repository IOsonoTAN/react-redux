export const actionsIsNewObject = isNewObject => {
  return {
    type: 'IS_NEW_OBJECT',
    payload: isNewObject
  }
}

export const actionsSetInitState = restaurant => {
  return {
    type: 'SET_INIT_STATE',
    payload: restaurant
  }
}

export const actionsSetLoading = value => {
  return {
    type: 'SET_LOADING',
    payload: value
  }
}

export const actionsSetCanEdit = value => {
  return {
    type: 'SET_CAN_EDIT',
    payload: value
  }
}

export const actionsChangeProvince = province => {
  return {
    type: 'CHANGE_PROVINCE',
    payload: province
  }
}

export const actionsChangeTitle = (lang, value) => {
  return {
    type: 'CHANGE_TITLE',
    payload: {
      lang,
      value
    }
  }
}

export const actionsChangeKind = kind => {
  return {
    type: 'CHANGE_KIND',
    payload: kind
  }
}

export const actionsChangeType = type => {
  return {
    type: 'CHANGE_TYPE',
    payload: type
  }
}

export const actionsChangeCategory = categoryId => {
  return {
    type: 'CHANGE_CATEGORY',
    payload: categoryId
  }
}

export const actionsChangeRating = rating => {
  return {
    type: 'CHANGE_RATING',
    payload: rating
  }
}

export const actionsChangeLocationLatLng = (name, latLng) => {
  return {
    type: 'CHANGE_LOCATION_LATLNG',
    payload: {
      name,
      latLng
    }
  }
}

export const actionsChangeLocationTitle = title => {
  return {
    type: 'CHANGE_LOCATION_TITLE',
    payload: title
  }
}

export const actionsChangeTelephoneNumber = telephoneNumbers => {
  return {
    type: 'CHANGE_TELEPHONE_NUMBER',
    payload: telephoneNumbers
  }
}

export const actionsChangePictures = pictures => {
  return {
    type: 'CHANGE_PICTURES',
    payload: pictures
  }
}

export const actionsChangeGallery = gallery => {
  return {
    type: 'CHANGE_GALLERY',
    payload: gallery
  }
}

export const actionsChangeBusinessHours = businessHours => {
  return {
    type: 'CHANGE_BUSINESS_HOURS',
    payload: businessHours
  }
}

export const actionsChangeDescription = (lang, value) => {
  return {
    type: 'CHANGE_DESCRIPTION',
    payload: {
      lang,
      value
    }
  }
}

export const actionsChangeOpenCloseDay = (type, value) => {
  return {
    type: 'CHANGE_OPEN_CLOSE_DAY',
    payload: {
      type,
      value
    }
  }
}
