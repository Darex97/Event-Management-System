using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class izmenaUsera : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Years",
                table: "UserAdmin");

            migrationBuilder.RenameColumn(
                name: "Surname",
                table: "UserAdmin",
                newName: "LastName");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "UserAdmin",
                newName: "FirstName");

            migrationBuilder.AlterColumn<string>(
                name: "PicturePath",
                table: "UserAdmin",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AddColumn<string>(
                name: "BirthDay",
                table: "UserAdmin",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "City",
                table: "UserAdmin",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Gender",
                table: "UserAdmin",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BirthDay",
                table: "UserAdmin");

            migrationBuilder.DropColumn(
                name: "City",
                table: "UserAdmin");

            migrationBuilder.DropColumn(
                name: "Gender",
                table: "UserAdmin");

            migrationBuilder.RenameColumn(
                name: "LastName",
                table: "UserAdmin",
                newName: "Surname");

            migrationBuilder.RenameColumn(
                name: "FirstName",
                table: "UserAdmin",
                newName: "Name");

            migrationBuilder.AlterColumn<string>(
                name: "PicturePath",
                table: "UserAdmin",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Years",
                table: "UserAdmin",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
