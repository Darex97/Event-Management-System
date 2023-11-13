using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class izbacivanjeRequiredIzEventa : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Events_UserAdmin_CreatorID",
                table: "Events");

            migrationBuilder.AlterColumn<int>(
                name: "CreatorID",
                table: "Events",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Events_UserAdmin_CreatorID",
                table: "Events",
                column: "CreatorID",
                principalTable: "UserAdmin",
                principalColumn: "ID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Events_UserAdmin_CreatorID",
                table: "Events");

            migrationBuilder.AlterColumn<int>(
                name: "CreatorID",
                table: "Events",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Events_UserAdmin_CreatorID",
                table: "Events",
                column: "CreatorID",
                principalTable: "UserAdmin",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
