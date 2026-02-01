import { date } from "assert-plus"

class MyInfoPage {
    selectorsList() {
        const selectors = {
            firstNameField : "[name='firstName']",
            middleNameField : "[name='middleName']",
            lastNameField : "[name='lastName']",
            genericField : ".oxd-input",
            gerericDateField : ".oxd-date-input",
            genericIndexField : ".oxd-select-text-input",
            dateCloseButton : ".--close",
            testField : "[options='']",
            comboBox : ".oxd-select-text--arrow",
            submitButton : "[type='submit']",
            //bloodButtom : "[tabindex='0']"            

        }
    
    return selectors
    }

    fillPersonalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorsList() .firstNameField) .should('be.visible') .clear() .type(firstName)
        cy.get(this.selectorsList() .middleNameField) .clear() .type(middleName)
        cy.get(this.selectorsList() .lastNameField) .clear() .type(lastName)

    }

    fillEmployeeDetails(employeeId, otherId, driversLicenseNumber, licenseExpireDate) {
        cy.get(this.selectorsList() .genericField).eq(4) .clear()  .type(employeeId)
        cy.get(this.selectorsList() .genericField).eq(5) .clear() .type(otherId)
        cy.get(this.selectorsList() .genericField) .eq(6) .clear() .type(driversLicenseNumber)
        cy.get(this.selectorsList() .gerericDateField) .eq(0) .clear() .type(licenseExpireDate)
        cy.get(this.selectorsList() .dateCloseButton) .click({force: true})


    }
    
    saveForm() {
        cy.get(this.selectorsList() .submitButton).eq(0) .click({force: true})
        cy.get('body') .should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }

    fillStatus(nationality, maritalStatus, dateOfBirth) {
        cy.get(this.selectorsList() .genericIndexField).eq(0) .type(nationality)
        cy.get(this.selectorsList() .genericIndexField).eq(1) .type(maritalStatus) 
        cy.get(this.selectorsList() .gerericDateField).eq(1) .clear() .type(dateOfBirth)
        cy.get(this.selectorsList() .dateCloseButton) .click({force: true})
    }
    
    fillCustomField(bloodType, testField) {
        cy.get(this.selectorsList() .genericIndexField) .eq(2) .type(bloodType)
        cy.get(this.selectorsList() .testField) .type(testField) 
        }

    

}

export default MyInfoPage