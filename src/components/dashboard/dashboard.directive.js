(function() {

  'use strict';

  angular.module('app.dashboard')
    .directive('tmplDashboard', directiveFunction)
    .directive('tmplDashboardViewToggle', directiveViewToggleFunction)
    .directive('tmplDashboardList', directiveListFunction)
    .directive('tmplDashboardGrid', directiveGridFunction)
    .controller('DashboardController', ControllerFunction);


  // ----- directiveFunction -----
  directiveFunction.$inject = [];

  /* @ngInject */
  function directiveFunction() {

    var directive = {
      restrict: 'E',
      templateUrl: 'components/dashboard/dashboard.html',
      scope: {},
      controller: 'DashboardController',
      controllerAs: 'vm'
    };

    return directive;
  }

  // ----- directiveViewToggleFunction -----
  directiveViewToggleFunction.$inject = [];

  /* @ngInject */
  function directiveViewToggleFunction() {

    var directive = {
      restrict: 'E',
      templateUrl: 'components/dashboard/dashboard.view.toggle.html'
    };

    return directive;
  }

  // ----- directiveListFunction -----
  directiveListFunction.$inject = [];

  /* @ngInject */
  function directiveListFunction() {

    var directive = {
      restrict: 'E',
      templateUrl: 'components/dashboard/dashboard.list.html'
    };

    return directive;
  }

  // ----- directiveGridFunction -----
  directiveGridFunction.$inject = [];

  /* @ngInject */
  function directiveGridFunction() {

    var directive = {
      restrict: 'E',
      templateUrl: 'components/dashboard/dashboard.grid.html'
    };

    return directive;
  }

  // ----- ControllerFunction -----
  ControllerFunction.$inject = ['$q', 'logger', 'dataService'];

  /* @ngInject */
  function ControllerFunction($q, logger, dataService) {
    var vm = this;
    var employeePromise = dataService.getAllEmployees();

    vm.sortOptions = [{
      value: 'id',
      name: 'ID'
    }, {
      value: 'firstName',
      name: 'Firstname'
    }, {
      value: 'lastName',
      name: 'Lastname'
    }, {
      value: 'dept',
      name: 'Department'
    }, {
      value: 'title',
      name: 'Title'
    }, {
      value: 'joiningDate',
      name: 'Joining Date'
    }, {
      value: 'birthDate',
      name: 'Birth Date'
    }];
    
    vm.addEmployee = addEmployee; 
    vm.removeEmployee = removeEmployee; 
    vm.saveEmployee = saveEmployee;
    
    activate();

    function activate() {
      vm.viewType = 'List';
      getData();
    }

    function getData() {
      $q.all([employeePromise])
        .then(getAllDataSuccess)
        .catch(getAllDataError);
    }

    function getAllDataSuccess(dataArray) {
      vm.allEmployees = dataArray[0];
      logger.success('Employees data successfully loaded!');
    }

    function getAllDataError(reason) {
      logger.log(reason);
    }

    function saveEmployee(data, id) {
      logger.success('Employee added successfully')
    };

    function removeEmployee(index) {
      vm.allEmployees.splice(index, 1);
    };

    function addEmployee() {
      vm.inserted = {
        id: vm.allEmployees.length+1,
        firstName: '',
        lastName: '',
        dept: '',
        title: '',
        birthDate: '',
        joiningDate: '' 
      };
      vm.allEmployees.push(vm.inserted);
    };
  }
})();