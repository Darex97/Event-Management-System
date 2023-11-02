using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class V1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "UserAdmin",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Surname = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    IsAdmin = table.Column<bool>(type: "bit", nullable: false),
                    PicturePath = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Years = table.Column<int>(type: "int", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserAdmin", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Events",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Date = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Time = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Place = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Categories = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LongDescribe = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ShortDescribe = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PicturePath = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreatorID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Events", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Events_UserAdmin_CreatorID",
                        column: x => x.CreatorID,
                        principalTable: "UserAdmin",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ConnectionEventUsers",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RegistratedUserID = table.Column<int>(type: "int", nullable: true),
                    ForWhatEventID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ConnectionEventUsers", x => x.ID);
                    table.ForeignKey(
                        name: "FK_ConnectionEventUsers_Events_ForWhatEventID",
                        column: x => x.ForWhatEventID,
                        principalTable: "Events",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_ConnectionEventUsers_UserAdmin_RegistratedUserID",
                        column: x => x.RegistratedUserID,
                        principalTable: "UserAdmin",
                        principalColumn: "ID");
                });

            migrationBuilder.CreateIndex(
                name: "IX_ConnectionEventUsers_ForWhatEventID",
                table: "ConnectionEventUsers",
                column: "ForWhatEventID");

            migrationBuilder.CreateIndex(
                name: "IX_ConnectionEventUsers_RegistratedUserID",
                table: "ConnectionEventUsers",
                column: "RegistratedUserID");

            migrationBuilder.CreateIndex(
                name: "IX_Events_CreatorID",
                table: "Events",
                column: "CreatorID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ConnectionEventUsers");

            migrationBuilder.DropTable(
                name: "Events");

            migrationBuilder.DropTable(
                name: "UserAdmin");
        }
    }
}
