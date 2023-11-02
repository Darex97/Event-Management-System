﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Models;

#nullable disable

namespace backend.Migrations
{
    [DbContext(typeof(EMSContext))]
    [Migration("20231102121627_V1.1")]
    partial class V11
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.13")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Models.ConnectionEventUser", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"));

                    b.Property<int?>("ForWhatEventID")
                        .HasColumnType("int");

                    b.Property<int?>("RegistratedUserID")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("ForWhatEventID");

                    b.HasIndex("RegistratedUserID");

                    b.ToTable("ConnectionEventUsers");
                });

            modelBuilder.Entity("Models.Event", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"));

                    b.Property<string>("Categories")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("CreatorID")
                        .HasColumnType("int");

                    b.Property<string>("Date")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LongDescribe")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PicturePath")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Place")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ShortDescribe")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Time")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.HasIndex("CreatorID");

                    b.ToTable("Events");
                });

            modelBuilder.Entity("Models.UserAdmin", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"));

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("IsAdmin")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("PicturePath")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Surname")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<int>("Years")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.ToTable("UserAdmin");
                });

            modelBuilder.Entity("Models.ConnectionEventUser", b =>
                {
                    b.HasOne("Models.Event", "ForWhatEvent")
                        .WithMany("RegistredUsers")
                        .HasForeignKey("ForWhatEventID");

                    b.HasOne("Models.UserAdmin", "RegistratedUser")
                        .WithMany("RegistratedEvents")
                        .HasForeignKey("RegistratedUserID");

                    b.Navigation("ForWhatEvent");

                    b.Navigation("RegistratedUser");
                });

            modelBuilder.Entity("Models.Event", b =>
                {
                    b.HasOne("Models.UserAdmin", "Creator")
                        .WithMany("CreatedEvents")
                        .HasForeignKey("CreatorID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Creator");
                });

            modelBuilder.Entity("Models.Event", b =>
                {
                    b.Navigation("RegistredUsers");
                });

            modelBuilder.Entity("Models.UserAdmin", b =>
                {
                    b.Navigation("CreatedEvents");

                    b.Navigation("RegistratedEvents");
                });
#pragma warning restore 612, 618
        }
    }
}
