﻿using HardwareSensorSystem.Security.Models;
using System.ComponentModel.DataAnnotations;

namespace HardwareSensorSystem.Security.ViewModels
{
    /// <summary>
    /// View model of role.
    /// </summary>
    public class RoleViewModel
    {
        public int? Id { get; set; }

        [Required]
        public string Name { get; set; }

        public string ConcurrencyStamp { get; set; }
    }

    public static class RoleViewModelExtensions
    {
        /// <summary>
        /// Convert an <see cref="ApplicationRole"/> to its view model.
        /// </summary>
        /// <param name="appRole">The role.</param>
        /// <returns>A view model of the role.</returns>
        public static RoleViewModel ToViewModel(this ApplicationRole appRole)
        {
            return new RoleViewModel()
            {
                Id = appRole.Id,
                Name = appRole.Name,
                ConcurrencyStamp = appRole.ConcurrencyStamp
            };
        }
    }
}
