class dashboardPage {

    selectorsList () {
        const selectors = {
            dashboardGrid : ".orangehrm-dashboard-grid",    
            sectionTitleTopBar : ".oxd-topbar-header-breadcrumb-module",
            MyInfoButton : "[href='/web/index.php/pim/viewMyDetails']"

        }    

        return selectors
    }
        checkDashboardPage () {
            cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
            cy.get(this.selectorsList() .dashboardGrid) .should('be.visible')
            cy.get(this.selectorsList() .MyInfoButton) .click()
        }
}

export default dashboardPage