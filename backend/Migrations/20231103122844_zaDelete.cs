using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class zaDelete : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ConnectionEventUsers_Events_ForWhatEventID",
                table: "ConnectionEventUsers");

            migrationBuilder.AlterColumn<int>(
                name: "ForWhatEventID",
                table: "ConnectionEventUsers",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_ConnectionEventUsers_Events_ForWhatEventID",
                table: "ConnectionEventUsers",
                column: "ForWhatEventID",
                principalTable: "Events",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ConnectionEventUsers_Events_ForWhatEventID",
                table: "ConnectionEventUsers");

            migrationBuilder.AlterColumn<int>(
                name: "ForWhatEventID",
                table: "ConnectionEventUsers",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_ConnectionEventUsers_Events_ForWhatEventID",
                table: "ConnectionEventUsers",
                column: "ForWhatEventID",
                principalTable: "Events",
                principalColumn: "ID");
        }
    }
}
